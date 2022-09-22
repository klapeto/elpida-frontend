import {Component, ContentChild, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
import {PagedResultDto} from '../../../dtos/paged-result.dto';
import {QueryModel} from '../../../models/query.model';
import {ValueConverter} from '../../../services/value-converter';
import {CollectionService} from '../../../services/collection-service';
import {FilterModel} from '../../../models/filter.model';
import {ActivatedRoute, Router} from '@angular/router';
import {DtoService} from '../../../services/dto.service';
import {QueryModelService} from '../../../services/query-model.service';

@Component({
    selector: 'app-paged-collection',
    templateUrl: './paged-collection.component.html',
    styleUrls: ['./paged-collection.component.css']
})
export class PagedCollectionComponent<TPreview, TModel> implements OnInit {

    public pagedResult: PagedResultDto<TPreview>;
    public searchString: string;

    public simpleQuery: QueryModel;
    public advancedQuery: QueryModel;

    public advancedShown: boolean;

    public searchName: string;

    public filtersPanelShown: boolean;

    public pageCount: number;
    public currentPage: number = 0;

    @Input()
    public service: CollectionService<TModel, TPreview>;

    @Input()
    public showSearchBox: boolean;

    @Input()
    public showFilters: boolean;

    @Input()
    public name: string;

    @Input()
    public lockedFilters: FilterModel[];

    @Input()
    public lockedOrderBy: string;

    @Output()
    public pageChanged: EventEmitter<PagedResultDto<TPreview>> = new EventEmitter<PagedResultDto<TPreview>>();

    @ContentChild('itemTemplate')
    public itemTemplate: TemplateRef<TPreview>;

    private resultsPerPage: number = 10;

    private currentQuery: QueryModel;

    public constructor(public readonly valueConverter: ValueConverter,
                       private readonly route: ActivatedRoute,
                       private readonly router: Router,
                       private readonly dtoService: DtoService,
                       private readonly queryModelService: QueryModelService) {
    }

    public onSimpleClicked(): void {
        this.showSimpleQuery();
    }

    public onAdvancedClicked(): void {
        this.showAdvancedQuery();
    }

    public onFiltersButtonClick(): void {
        this.filtersPanelShown = !this.filtersPanelShown;
    }

    public async onFiltersSubmitted(query: QueryModel): Promise<void> {
        this.filtersPanelShown = false;
        await this.loadQuery(query, 0);
    }

    public async revertPage(): Promise<void> {
        await this.loadQuery(new QueryModel([]), 0);
    }

    public async onSearchAsync(ev: KeyboardEvent): Promise<void> {
        if (ev.key === 'Enter') {
            const filter = this.service.createSearchFilter();
            filter.value = this.searchString;

            this.advancedQuery = new QueryModel([filter]);

            await this.loadQuery(this.advancedQuery, 0);

            if (this.searchString === '') {
                this.showSimpleQuery();
            } else {
                this.showAdvancedQuery();
            }
        }
    }

    public async onPageChange(page: number): Promise<void> {
        if (this.currentPage !== page) {    // avoid multiple API Calls from initialisation
            this.currentPage = page;
            await this.loadQuery(this.currentQuery, this.currentPage);
        }
    }

    public ngOnInit(): void {
        this.simpleQuery = this.service.createSimpleQuery();
        this.advancedQuery = this.service.createAdvancedQuery();

        const searchFilter = this.service.createSearchFilter();
        if (searchFilter === undefined || searchFilter === null) {
            this.showSearchBox = false;
        } else {
            this.searchName = searchFilter.title;
        }

        this.route.queryParams.subscribe(async p => {
            const result = this.queryModelService.createModelFromParams(p, this.service.createAdvancedQuery().filters);
            console.log(result);
            this.advancedQuery = result.query;
            this.currentPage = result.page;
            this.currentQuery = this.advancedQuery;
            await this.getPageResults(this.advancedQuery, this.currentPage);
        });
    }

    private showAdvancedQuery(): void {
        this.advancedShown = true;
        this.currentQuery = this.advancedQuery;
    }

    private showSimpleQuery(): void {
        this.currentQuery = this.simpleQuery;
        this.advancedShown = false;
    }

    private async loadQuery(query: QueryModel, page: number): Promise<void> {
        this.preProcessQuery(query);
        await this.router.navigate([], {
            relativeTo: this.route,
            queryParams: this.queryModelService.createHttpQueryObjectFromModel(query, page)
        });
    }

    private preProcessQuery(query: QueryModel): QueryModel {
        if (this.lockedFilters !== undefined) {
            query.filters = query.filters.concat(this.lockedFilters);
        }

        if (this.lockedOrderBy !== undefined) {
            query.orderBy = this.lockedOrderBy;
        }

        return query;
    }

    private async getPageResults(query: QueryModel, page: number): Promise<void> {
        const queryRequest = this.dtoService.createQueryDto(query, page);

        const result = await this.service.getPreviews(queryRequest);
        this.pageCount = Math.ceil(result.totalCount / this.resultsPerPage);
        this.currentPage = Math.min(this.pageCount, page);
        this.pagedResult = result;
        this.pageChanged.emit(this.pagedResult);
    }
}

