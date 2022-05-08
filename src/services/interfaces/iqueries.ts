import {QueryModel} from '../../models/query.model';
import {StringFilterModel} from '../../models/filters/string-filter.model';

export interface IQueries {
     createSimpleQuery(): QueryModel;
     createAdvancedQuery(): QueryModel;
     createSearchFilter(): StringFilterModel | null;
}
