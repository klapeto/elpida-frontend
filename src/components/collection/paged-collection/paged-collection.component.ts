import {
    AfterViewInit,
    Component,
    ComponentFactoryResolver,
    EventEmitter,
    Input,
    OnInit,
    Output, TemplateRef,
    ViewChild,
    ViewContainerRef
} from '@angular/core';
import {PagedResultDto} from '../../../dtos/paged-result.dto';
import {QueryModel} from '../../../models/query.model';
import {PageDto} from '../../../dtos/page.dto';
import {ValueConverter} from '../../../services/value-converter';
import {CollectionService} from '../../../services/collection-service';
import {FilterModel} from '../../../models/filter.model';

@Component({
    selector: 'app-paged-collection',
    templateUrl: './paged-collection.component.html',
    styleUrls: ['./paged-collection.component.css']
})
export class PagedCollectionComponent implements AfterViewInit, OnInit {

    public pagedResult: PagedResultDto<any>;
    public maxResultPages: number;
    public searchString: string;

    private resultsPerPage = 10;
    private curPage = 0;

    public currentQuery: QueryModel;

    public advancedShown: boolean;

    searchName: string;

    filtersPanelShown: boolean;

    @Input() service: CollectionService<any, any>;
    @Input() showSearchBox: boolean;
    @Input() showFilters: boolean;
    @Input() name: string;

    @Input() lockedFilters: FilterModel[];
    @Input() lockedOrderBy;

    @Input() customRoutePrefix: string;

    @Output() pageChanged: EventEmitter<PagedResultDto<any>> = new EventEmitter<PagedResultDto<any>>();

    @ViewChild('itemContainer', {read: ViewContainerRef}) itemContainer: ViewContainerRef;

    @Input() itemTemplate: TemplateRef<any>;

    constructor(public valueConverter: ValueConverter, private componentFactoryResolver: ComponentFactoryResolver) {

    }

    public onSimpleClicked() {
        this.advancedShown = false;
        this.currentQuery = this.service.createSimpleQuery();
    }

    public onAdvancedClicked() {
        this.advancedShown = true;
        this.currentQuery = this.service.createAdvancedQuery();
    }

    ngAfterViewInit(): void {
        this.onSimpleClicked();

        this.appendLockedFilters();
        this.replaceOrderByIfNeeded();
        this.reloadPageSafe();
    }

    public onFiltersButtonClick() {
        this.filtersPanelShown = !this.filtersPanelShown;
    }

    private appendLockedFilters() {
        if (this.lockedFilters !== undefined) {
            this.currentQuery.filters = this.currentQuery.filters.concat(this.lockedFilters);
        }
    }

    private replaceOrderByIfNeeded() {
        if (this.lockedOrderBy !== undefined) {
            this.currentQuery.orderBy = this.lockedOrderBy;
        }
    }

    public onFiltersSubmitted(query: QueryModel): void {
        Object.assign(this.currentQuery, query);
        this.appendLockedFilters();
        this.replaceOrderByIfNeeded();
        this.reloadPageSafe();
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
            alert(e);
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

    public revertPage() {

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

        if (this.itemContainer !== undefined) {
            this.itemContainer.element.nativeElement.scrollIntoView({behavior: 'smooth', block: 'end', inline: 'nearest'});
        }
    }

    ngOnInit(): void {
        const searchFilter = this.service.createSearchFilter();
        if (searchFilter === undefined) {
            this.showSearchBox = false;
        } else {
            this.searchName = searchFilter.title;
        }
    }
}
