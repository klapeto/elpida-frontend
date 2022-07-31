import {AfterViewInit, Component, ContentChild, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
import {PagedResultDto} from '../../../dtos/paged-result.dto';
import {QueryModel} from '../../../models/query.model';
import {PageDto} from '../../../dtos/page.dto';
import {ValueConverter} from '../../../services/value-converter';
import {CollectionService} from '../../../services/collection-service';
import {FilterModel} from '../../../models/filter.model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {DtoService} from '../../../services/dto.service';
import {QueryDto} from '../../../dtos/query.dto';
import {ValueFilterModel} from '../../../models/value-filter.model';
import {ComparisonModel} from '../../../models/comparison.model';

@Component({
    selector: 'app-paged-collection',
    templateUrl: './paged-collection.component.html',
    styleUrls: ['./paged-collection.component.css']
})
export class PagedCollectionComponent<TPreview, TModel> implements AfterViewInit, OnInit {

    public pagedResult: PagedResultDto<TPreview>;
    public searchString: string;

    public currentQuery: QueryModel;

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

    public constructor(public valueConverter: ValueConverter,
                       private readonly route: ActivatedRoute,
                       private readonly router: Router,
                       private readonly dtoService: DtoService) {
    }

    public onSimpleClicked(): void {
        this.advancedShown = false;
        this.currentQuery = this.service.createSimpleQuery();
    }

    public onAdvancedClicked(): void {
        this.advancedShown = true;
        this.currentQuery = this.service.createAdvancedQuery();
    }

    public ngAfterViewInit(): void {
        this.route.queryParams.subscribe(p => {
            this.setCurrentQueryFromParams(p);
            this.reloadFromCurrentQuery();
        });
    }

    public onFiltersButtonClick(): void {
        this.filtersPanelShown = !this.filtersPanelShown;
    }

    public onFiltersSubmitted(query: QueryModel): void {
        this.filtersPanelShown = false;
        this.currentQuery = query;
        this.loadCurrentQuery();
    }

    public revertPage(): void {
        this.ngAfterViewInit();
    }

    public onSearch(ev: KeyboardEvent): void {
        if (ev.key === 'Enter') {
            const filter = this.service.createSearchFilter();
            filter.value = this.searchString;
            this.currentQuery = new QueryModel(
                [filter],
                this.currentQuery.orderBy,
                this.currentQuery.descending
            );
            this.appendLockedFilters();
            this.replaceOrderByIfNeeded();
            this.reloadPageSafe();
        }
    }

    public async onPageChange(page: number): Promise<void> {
        if (this.currentPage !== page) {    // avoid multiple API Calls from initialisation
            this.currentPage = page;
            await this.loadCurrentQuery();
        }
    }

    public ngOnInit(): void {
        const searchFilter = this.service.createSearchFilter();
        if (searchFilter === undefined || searchFilter === null) {
            this.showSearchBox = false;
        } else {
            this.searchName = searchFilter.title;
        }
    }

    private static getFilterTokens(str: string): { name: string, operation: string } {
        const tokens: string[] = [];
        let previousDot = 0;
        for (let i = 0; i < str.length; ++i) {
            if (str[i] === '.') {
                if (previousDot === i) {
                    throw new Error('period must be followed and leaded by characters');
                }
                tokens.push(str.slice(previousDot, i));
                previousDot = i;
            }
        }

        if (previousDot === str.length) {
            throw new Error('period must be followed and leaded by characters');
        }
        tokens.push(str.slice(previousDot, str.length));
        if (tokens.length !== 2) {
            throw new Error('query parameter is not in the format of "filter.operation"');
        }
        return {name: tokens[0], operation: tokens[2]};
    }

    private async loadCurrentQuery(): Promise<void> {
        await this.router.navigate([], {queryParams: this.createHttpQueryObjectFromCurrentQuery()});
    }

    private createHttpQueryObjectFromCurrentQuery(): object {
        const obj = {};

        if (this.currentPage > 0) {
            obj['page'] = this.currentPage;
        }

        if (this.currentQuery.descending) {
            obj['descending'] = true;
        }

        if (this.currentQuery.orderBy !== null
            && this.currentQuery.orderBy !== '') {
            obj['orderBy'] = this.currentQuery.orderBy;
        }

        this.currentQuery.filters.filter(f => f instanceof ValueFilterModel && f.isSet())
            .forEach(f => {
                const filter = f as ValueFilterModel<any>;
                obj[`${filter.internalName}.${filter.comparison.internalName}`] = filter.value;
            });

        return obj;
    }

    private reloadFromCurrentQuery(): void {
        this.appendLockedFilters();
        this.replaceOrderByIfNeeded();
        this.getPageResults(this.currentPage);
    }

    private appendLockedFilters(): void {
        if (this.lockedFilters !== undefined) {
            this.currentQuery.filters = this.currentQuery.filters.concat(this.lockedFilters);
        }
    }

    private replaceOrderByIfNeeded(): void {
        if (this.lockedOrderBy !== undefined) {
            this.currentQuery.orderBy = this.lockedOrderBy;
        }
    }

    private async reloadPageSafe(): Promise<void> {
        const previousResult = this.pagedResult,
            prevMaxPages = this.pageCount,
            prevCurPage = this.currentPage;
        this.pagedResult = undefined;
        this.pageCount = undefined;
        this.currentPage = 0;
        try {
            await this.getPageResults(this.currentPage);
        } catch (e) {
            this.pagedResult = previousResult;
            this.pageCount = prevMaxPages;
            this.currentPage = prevCurPage;
        }
    }

    private createQueryDto(query: QueryModel, page: number): QueryDto {
        return new QueryDto(
            new PageDto(page * this.resultsPerPage, this.resultsPerPage),
            query.orderBy,
            query.descending,
            query.filters
                .filter(f => f.isSet())
                .map(f => this.dtoService.createFromFilter(f))
        );
    }

    private setCurrentQueryFromParams(params: Params): void {
        this.currentPage = Number.parseInt(params['page'], null);
        if (isNaN(this.currentPage)) {
            this.currentPage = 0;
        }

        const allFilters = this.service
            .createAdvancedQuery()
            .filters;

        const filtersMap: IFiltersMap = {};
        allFilters
            .filter(f => f instanceof ValueFilterModel)
            .forEach(f => filtersMap[f.internalName] = f as ValueFilterModel<any>);

        const comparisons = ComparisonModel.mapToInternalNames;

        const assignedFilters: FilterModel[] = [];

        Object.keys(params).filter(k => k.includes('.')).forEach(k => {
            const tokens = PagedCollectionComponent.getFilterTokens(k);
            const filter = filtersMap[tokens.name];
            if (filter === undefined) {
                return;
            }
            const operation = comparisons[tokens.operation];
            filter.comparison = operation !== undefined ? operation() : ComparisonModel.equals();
            filter.trySetValue(params[k]);
            if (filter.isSet()) {
                assignedFilters.push(filter);
            }
        });

        let orderBy = params['orderBy'];
        if (orderBy === undefined || allFilters.findIndex(f => f.internalName === orderBy) === -1) {
            orderBy = null;
        }

        let descendingString = params['descending'];
        let descending: boolean = false;
        if (descendingString !== undefined) {
            descendingString = descendingString.toLowerCase();
            descending = descendingString === 'true' || descendingString === '1';
        }

        this.currentQuery = new QueryModel(assignedFilters, orderBy, descending);
    }

    private async getPageResults(page: number): Promise<void> {
        const queryRequest = this.createQueryDto(this.currentQuery, page);

        const result = await this.service.getPreviews(queryRequest);
        this.pageCount = Math.ceil(result.totalCount / this.resultsPerPage);
        this.currentPage = Math.min(this.pageCount, page);
        this.pagedResult = result;
        this.pageChanged.emit(this.pagedResult);
    }
}

interface IFiltersMap {
    [name: string]: ValueFilterModel<any>;
}


