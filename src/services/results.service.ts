import {Injectable} from '@angular/core';
import {IResultsService} from './iresults-service';
import {PagedResult} from '../models/paged-result';
import {ResultPreview} from '../models/result-preview';
import {Result} from '../models/result';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {QueryRequest} from '../models/query-request';

@Injectable()
export class ResultsService implements IResultsService {

    constructor(private http: HttpClient) {
    }

    private baseUrl = 'https://api.elpida.dev/api/v1/result';
    private baseSearchUrl = 'https://api.elpida.dev/api/v1/result/search';

    private static getPageRequestParams(obj: any): HttpParams {
        return new HttpParams({
            fromObject: obj
        });
    }

    getPreviews(query: QueryRequest): Observable<PagedResult<ResultPreview>> {
        return this.http.post<PagedResult<ResultPreview>>(this.baseSearchUrl, query);
    }

    getSingle(id: string): Observable<Result> {
        console.log(id);
        return this.http.get<Result>(this.baseUrl + '/' + id);
    }
}
