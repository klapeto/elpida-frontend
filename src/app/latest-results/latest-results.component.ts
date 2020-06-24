import {Component, Inject} from '@angular/core';
import {PagedResult} from '../../models/paged-result';
import {ResultPreview} from '../../models/result-preview';
import {ValueConverter} from '../../services/value-converter';
import {ResultsService} from '../../services/results.service';
import {PageRequest} from '../../models/page-request';

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

  constructor(
     @Inject('BASE_URL') public baseUrl: string,
      public valueConverter: ValueConverter,
      private resultService: ResultsService,
  ) {
    this.getPageResults(0);
  }

  private getPageResults(page: number) {

    this.resultService.getPreviews(new PageRequest(page * this.resultsPerPage, this.resultsPerPage, 0))
        .subscribe(result => {
          result.list.forEach(x => x.timeStamp = new Date(Date.parse(x.timeStamp.toString())));
          if (this.maxResultPages === undefined) {
            this.maxResultPages = Math.ceil(result.totalCount / this.resultsPerPage);
          }

          this.pageResult = result;
        }, error => console.error(error));
  }

  public onPageChange(page: number) {
    this.getPageResults(page);
  }
}
