import {Result} from '../models/result';
import {PagedResult} from '../models/paged-result';
import {ResultPreview} from '../models/result-preview';
import {Observable} from 'rxjs';
import {QueryRequest} from '../models/query-request';

export interface IResultsService {
    getSingle(id: string): Observable<Result>;
    getPreviews(query: QueryRequest): Observable<PagedResult<ResultPreview>>
}
