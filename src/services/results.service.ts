import {Injectable} from '@angular/core';
import {IResultsService} from './iresults-service';
import {PageRequest} from '../models/page-request';
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

    private baseUrl = 'http://localhost:5000/api/v1/result/search';

    private static getPageRequestParams(obj: any): HttpParams {
        return new HttpParams({
            fromObject: obj
        });
    }

    // getPreviews(page: PageRequest): Observable<PagedResult<ResultPreview>> {
    //     return this.http.get<PagedResult<ResultPreview>>(this.baseUrl, {params: ResultsService.getPageRequestParams(page)});
    // }

    getPreviews(query: QueryRequest): Observable<PagedResult<ResultPreview>> {
        return this.http.post<PagedResult<ResultPreview>>(this.baseUrl, query);
    }

    getSingle(id: string): Observable<Result> {
        console.log(id);
        return this.http.get<Result>(this.baseUrl + '/' + id);
    }
}
