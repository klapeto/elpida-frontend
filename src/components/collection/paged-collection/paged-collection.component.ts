import {
    AfterViewInit,
    Component,
    ComponentFactoryResolver,
    EventEmitter,
    Input,
    OnInit,
    Output,
    ViewChild,
    ViewContainerRef
} from '@angular/core';
import {PagedResult} from '../../../models/paged-result';
import {Query} from '../../../models/query';
import {PageRequest} from '../../../models/page-request';
import {ValueConverter} from '../../../services/value-converter';
import {CollectionService} from '../../../services/collection-service';
import {Filter} from '../../../models/filter';
import {StringFilter} from '../../../models/filters/string-filter';
import {Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';
import {ErrorHandlerService} from '../../../services/error-handler.service';

@Component({
    selector: 'app-paged-collection',
    templateUrl: './paged-collection.component.html',
    styleUrls: ['./paged-collection.component.css']
})
export class PagedCollectionComponent implements AfterViewInit, OnInit {

    public pagedResult: PagedResult<any>;
    public maxResultPages: number;
    public searchString: string;

    private resultsPerPage = 10;
    private curPage = 0;

    private currentQuery: Query;

    searchName: string;

    filtersPanelShown: boolean;

    @Input() service: CollectionService<any, any>;
    @Input() showSearchBox: boolean;
    @Input() showFilters: boolean;
    @Input() name: string;

    @Input() lockedFilters: Filter[];
    @Input() lockedOrderBy;

    @Input() customRoutePrefix: string;

    @Output() pageChanged: EventEmitter<PagedResult<any>> = new EventEmitter<PagedResult<any>>();

    @ViewChild('itemContainer', {read: ViewContainerRef}) itemContainer: ViewContainerRef;

    constructor(public valueConverter: ValueConverter, private componentFactoryResolver: ComponentFactoryResolver) {

    }

    ngAfterViewInit(): void {
        this.currentQuery = this.service.createDefaultQuery();

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

    public onFiltersSubmitted(query: Query): void {
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
        this.service.getPreviews(new PageRequest(page * this.resultsPerPage, this.resultsPerPage), this.currentQuery)
            .subscribe(result => {
                this.curPage = page;
                if (this.maxResultPages === undefined) {
                    this.maxResultPages = Math.ceil(result.totalCount / this.resultsPerPage);
                }
                this.pagedResult = result;
                this.fillItems();
                this.pageChanged.emit(this.pagedResult);
            });
    }

    private fillItems() {
        this.itemContainer.clear();
        if (this.pagedResult !== undefined) {
            this.pagedResult.items.forEach(i => {
                this.service.createCollectionItemComponent(i, this.componentFactoryResolver, this.itemContainer, this.customRoutePrefix);
            });
        }
    }

    public onSearch(ev: KeyboardEvent): void {
        if (ev.key === 'Enter') {
            const filter = this.service.createSearchFilter();
            filter.value = this.searchString;
            this.currentQuery = new Query(
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

        this.itemContainer.element.nativeElement.scrollIntoView({behavior: 'smooth', block: 'end', inline: 'nearest'});
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
