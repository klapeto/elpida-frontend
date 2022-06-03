import {PageDto} from '../../dtos/page.dto';
import {QueryModel} from '../../models/query.model';
import {PagedResultDto} from '../../dtos/paged-result.dto';
import {IQueries} from './iqueries';

export interface ICollectionService<TModel, TPreviewModel> extends IQueries {
    getSingle(id: string): Promise<TModel>;
    getPreviews(page: PageDto, query: QueryModel): Promise<PagedResultDto<TPreviewModel>>;
}
