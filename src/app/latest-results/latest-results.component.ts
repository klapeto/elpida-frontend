import {Component, Inject} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {PagedResult} from '../../models/paged-result';
import {ResultPreview} from '../../models/result-preview';
import {ValueConverter} from '../../services/value-converter';

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
    private http: HttpClient,
    public valueConverter: ValueConverter,
    @Inject('BASE_URL') public baseUrl: string
  ) {
    this.getPageResults(0);
  }

  private getPageResults(page: number) {
    this.http.get<PagedResult<ResultPreview>>(this.baseUrl + 'api/result', {params: this.getPageRequestParams(page)})
      .subscribe(result => {
        result.list.forEach(x => x.timeStamp = new Date(Date.parse(x.timeStamp.toString())));
        if (this.maxResultPages === undefined) {
          this.maxResultPages = Math.ceil(result.totalCount / this.resultsPerPage);
        }

        this.pageResult = result;
      }, error => console.error(error));
  }

  private getPageRequestParams(pageNo: number): HttpParams {
    return new HttpParams({
      fromObject: {
        next: (pageNo * this.resultsPerPage).toString(),
        count: this.resultsPerPage.toString()
      }
    });
  }

  public onPageChange(page: number) {
    this.getPageResults(page);
  }
}
