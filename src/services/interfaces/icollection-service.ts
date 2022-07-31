import {PagedResultDto} from '../../dtos/paged-result.dto';
import {IQueries} from './iqueries';
import {QueryDto} from '../../dtos/query.dto';

export interface ICollectionService<TModel, TPreviewModel> extends IQueries {
    getSingle(id: string): Promise<TModel>;
    getPreviews(query: QueryDto): Promise<PagedResultDto<TPreviewModel>>;
}
