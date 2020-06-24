import {Injectable} from '@angular/core';
import {IResultsService} from './iresults-service';
import {PageRequest} from '../models/page-request';
import {PagedResult} from '../models/paged-result';
import {ResultPreview} from '../models/result-preview';
import {Result} from '../models/result';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class ResultsService implements IResultsService {

    private baseUrl = 'https://beta.elpida.dev/api/result';

    constructor(private http: HttpClient) {
    }

    getPreviews(page: PageRequest): Observable<PagedResult<ResultPreview>> {
        return this.http.get<PagedResult<ResultPreview>>(this.baseUrl, {params: this.getPageRequestParams(page)});
    }

    getSingle(id: string): Observable<Result> {
        console.log(id);
        return this.http.get<Result>(this.baseUrl + '/' + id);
    }

    private getPageRequestParams(obj: any): HttpParams {
        return new HttpParams({
            fromObject: obj
        });
    }
}
