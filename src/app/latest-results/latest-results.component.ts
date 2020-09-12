import {Component, Inject} from '@angular/core';
import {PagedResult} from '../../models/paged-result';
import {ResultPreview} from '../../models/result-preview';
import {ValueConverter} from '../../services/value-converter';
import {ResultsService} from '../../services/results.service';
import {PageRequest} from '../../models/page-request';
import {FiltersService} from '../../services/filters.service';
import {Query} from '../../models/query';

@Component({
    selector: 'app-latest-results',
    templateUrl: './latest-results.component.html',
    styleUrls: ['./latest-results.component.css'],
    providers: [ValueConverter]
})
export class LatestResultsComponent {

    public pageResult: PagedResult<ResultPreview>;
    public maxResultPages: number;
    private resultsPerPage = 10;
    private curPage = 0;

    constructor(
        @Inject('BASE_URL') public baseUrl: string,
        public valueConverter: ValueConverter,
        private resultService: ResultsService,
        public filtersService: FiltersService
    ) {
        this.reloadPageSafe();
    }

    public onFiltersSubmitted(): void {
        this.reloadPageSafe();
    }

    private reloadPageSafe(): void {
        const previousResult = this.pageResult,
            prevMaxPages = this.maxResultPages,
            prevCurPage = this.curPage;
        this.pageResult = undefined;
        this.maxResultPages = undefined;
        this.curPage = 0;
        try {
            this.getPageResults(this.curPage);
        } catch (e) {
            alert(e);
            this.pageResult = previousResult;
            this.maxResultPages = prevMaxPages;
            this.curPage = prevCurPage;
        }
    }

    private getPageResults(page: number): void {
        this.resultService.getPreviews(new PageRequest(page * this.resultsPerPage, this.resultsPerPage, 0), this.filtersService.query)
            .subscribe(result => {
                this.curPage = page;
                result.list.forEach(x => x.timeStamp = new Date(Date.parse(x.timeStamp.toString())));
                if (this.maxResultPages === undefined) {
                    this.maxResultPages = Math.ceil(result.totalCount / this.resultsPerPage);
                }

                this.pageResult = result;
            }, error => console.error(error));
    }

    public onPageChange(page: number): void {
        if (this.curPage !== page) {    // avoid multiple API Calls from initialisation
            this.getPageResults(page);
        }
    }
}
