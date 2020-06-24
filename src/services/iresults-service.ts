import {Result} from '../models/result';
import {PagedResult} from '../models/paged-result';
import {ResultPreview} from '../models/result-preview';
import {PageRequest} from '../models/page-request';
import {Observable} from 'rxjs';

export interface IResultsService {
    getSingle(id: string): Observable<Result>;
    getPreviews(page: PageRequest): Observable<PagedResult<ResultPreview>>;
}
