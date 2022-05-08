import {Observable} from 'rxjs';
import {PageDto} from '../../dtos/page.dto';
import {QueryModel} from '../../models/query.model';
import {PagedResultDto} from '../../dtos/paged-result.dto';
import {IQueries} from './iqueries';

export interface ICollectionService<TModel, TPreviewModel> extends IQueries {
    getSingle(id: string): Observable<TModel>;
    getPreviews(page: PageDto, query: QueryModel): Observable<PagedResultDto<TPreviewModel>>;
}
