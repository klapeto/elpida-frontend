import {AfterViewInit, Component, ComponentFactoryResolver, Input, ViewChild, ViewContainerRef} from '@angular/core';
import {PagedResult} from '../../../models/paged-result';
import {Query} from '../../../models/query';
import {PageRequest} from '../../../models/page-request';
import {ValueConverter} from '../../../services/value-converter';
import {CollectionService} from '../../../services/collection-service';

@Component({
    selector: 'app-paged-collection',
    templateUrl: './paged-collection.component.html',
    styleUrls: ['./paged-collection.component.css']
})
export class PagedCollectionComponent implements AfterViewInit {

    public pagedResult: PagedResult<any>;
    public maxResultPages: number;
    public searchString: string;

    private resultsPerPage = 10;
    private curPage = 0;

    private currentQuery: Query;

    @Input() service: CollectionService<any, any>;
    @Input() showSearchBox: boolean;
    @Input() showFilters: boolean;
    @Input() name: string;

    @ViewChild('itemContainer', {read: ViewContainerRef}) itemContainer: ViewContainerRef;

    constructor(public valueConverter: ValueConverter, private componentFactoryResolver: ComponentFactoryResolver) {

    }

    ngAfterViewInit(): void {
        this.currentQuery = new Query([], this.service.createDefaultOrderByFilter(), true);
        this.reloadPageSafe();
    }

    public onFiltersButtonClick() {
        this.showFilters = !this.showFilters;
    }

    public onFiltersSubmitted(query: Query): void {
        this.currentQuery = query;
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
        this.service.getPreviews(new PageRequest(page * this.resultsPerPage, this.resultsPerPage, 0), this.currentQuery)
            .subscribe(result => {
                this.curPage = page;
                if (this.maxResultPages === undefined) {
                    this.maxResultPages = Math.ceil(result.totalCount / this.resultsPerPage);
                }
                this.pagedResult = result;
                this.fillItems();
            }, error => console.error(error));
    }

    private fillItems() {
        this.itemContainer.clear();
        if (this.pagedResult !== undefined) {
            this.pagedResult.list.forEach(i => {
                this.service.createCollectionItemComponent(i, this.componentFactoryResolver, this.itemContainer);
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
            this.reloadPageSafe();
        }
    }

    public onPageChange(page: number): void {
        if (this.curPage !== page) {    // avoid multiple API Calls from initialisation
            this.getPageResults(page);
        }

        this.itemContainer.element.nativeElement.scrollIntoView({behavior: 'smooth', block: 'end', inline: 'nearest'});
    }
}
