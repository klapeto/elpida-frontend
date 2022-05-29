import {AfterViewInit, Component, ContentChild, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
import {PagedResultDto} from '../../../dtos/paged-result.dto';
import {QueryModel} from '../../../models/query.model';
import {PageDto} from '../../../dtos/page.dto';
import {ValueConverter} from '../../../services/value-converter';
import {CollectionService} from '../../../services/collection-service';
import {FilterModel} from '../../../models/filter.model';
import {ModalService} from '../../../services/modal.service';

@Component({
    selector: 'app-paged-collection',
    templateUrl: './paged-collection.component.html',
    styleUrls: ['./paged-collection.component.css']
})
export class PagedCollectionComponent<TPreview, TModel> implements AfterViewInit, OnInit {

    public pagedResult: PagedResultDto<TPreview>;
    public maxResultPages: number;
    public searchString: string;

    public currentQuery: QueryModel;

    public advancedShown: boolean;

    public searchName: string;

    public filtersPanelShown: boolean;

    @Input() public service: CollectionService<TModel, TPreview>;
    @Input() public showSearchBox: boolean;
    @Input() public showFilters: boolean;
    @Input() public name: string;

    @Input() public lockedFilters: FilterModel[];
    @Input() public lockedOrderBy: string;
    @Input() public initialQuery: QueryModel;

    @Output() public pageChanged: EventEmitter<PagedResultDto<TPreview>> = new EventEmitter<PagedResultDto<TPreview>>();

    @ContentChild('itemTemplate') public itemTemplate: TemplateRef<TPreview>;

    private resultsPerPage: number = 10;
    private curPage: number = 0;

    public constructor(public valueConverter: ValueConverter,
                       private modalService: ModalService) {

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
        if (this.initialQuery !== undefined) {
            this.currentQuery = this.initialQuery;
        } else {
            this.onSimpleClicked();
        }

        this.appendLockedFilters();
        this.replaceOrderByIfNeeded();
        this.reloadPageSafe();
        this.currentQuery = this.service.createSimpleQuery();   // revert to simple
    }

    public onFiltersButtonClick(): void {
        this.filtersPanelShown = !this.filtersPanelShown;
    }

    public onFiltersSubmitted(query: QueryModel): void {
        this.currentQuery = query;
        this.appendLockedFilters();
        this.replaceOrderByIfNeeded();
        this.reloadPageSafe();
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

    public onPageChange(page: number): void {
        if (this.curPage !== page) {    // avoid multiple API Calls from initialisation
            this.getPageResults(page);
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

    private reloadPageSafe(): void {
        const previousResult = this.pagedResult,
            prevMaxPages = this.maxResultPages,
            prevCurPage = this.curPage;
        this.pagedResult = undefined;
        this.maxResultPages = undefined;
        this.curPage = 0;
        try {
            this.getPageResults(this.curPage);
        } catch (e) {
            this.modalService.showMessage('Error', e);
            this.pagedResult = previousResult;
            this.maxResultPages = prevMaxPages;
            this.curPage = prevCurPage;
        }
    }

    private getPageResults(page: number): void {
        this.service.getPreviews(new PageDto(page * this.resultsPerPage, this.resultsPerPage), this.currentQuery)
            .subscribe(result => {
                this.curPage = page;
                if (this.maxResultPages === undefined) {
                    this.maxResultPages = Math.ceil(result.totalCount / this.resultsPerPage);
                }
                this.pagedResult = result;
                this.pageChanged.emit(this.pagedResult);
            });
    }
}
