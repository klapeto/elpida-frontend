import {Result} from '../models/result/result';
import {PagedResult} from '../models/paged-result';
import {ResultPreview} from '../models/result-preview';
import {Observable} from 'rxjs';
import {PageRequest} from '../models/page-request';
import {Query} from '../models/query';

export interface IResultsService {
    getSingle(id: string): Observable<Result>;

    getPreviews(page: PageRequest, query: Query): Observable<PagedResult<ResultPreview>>;
}
