import {Injectable} from '@angular/core';
import {IResultsService} from './iresults-service';
import {PagedResult} from '../models/paged-result';
import {ResultPreview} from '../models/result-preview';
import {Result} from '../models/result/result';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {QueryRequest} from '../models/query-request';
import {PageRequest} from '../models/page-request';
import {Query} from '../models/query';
import {FiltersService} from './filters.service';

@Injectable()
export class ResultsService implements IResultsService {

    private readonly baseUrl = 'https://api.elpida.dev/api/v1/result';
    private readonly baseSearchUrl = 'https://api.elpida.dev/api/v1/result/search';

    // private baseUrl = 'http://localhost:5000/api/v1/result';
    // private baseSearchUrl = 'http://localhost:5000/api/v1/result/search';

    constructor(private readonly http: HttpClient,
                private readonly filtersService: FiltersService) {

    }

    public getPreviews(page: PageRequest, query: Query): Observable<PagedResult<ResultPreview>> {
        return this.http.post<PagedResult<ResultPreview>>(this.baseSearchUrl,
            new QueryRequest(page, query.orderBy.name, query.descending, this.filtersService.translateToDtos(query.filters)));
    }

    public getSingle(id: string): Observable<Result> {
        return this.http.get<Result>(this.baseUrl + '/' + id);
    }
}
