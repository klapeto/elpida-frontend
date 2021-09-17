import {Observable} from 'rxjs';
import {PageRequest} from '../../models/page-request';
import {Query} from '../../models/query';
import {PagedResult} from '../../models/paged-result';
import {IFilters} from './ifilters';

export interface ICollectionService<TModel, TPreviewModel> extends IFilters {
    getSingle(id: string): Observable<TModel>;
    getPreviews(page: PageRequest, query: Query): Observable<PagedResult<TPreviewModel>>;
}
