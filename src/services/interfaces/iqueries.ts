import {Query} from '../../models/query';
import {StringFilter} from '../../models/filters/string-filter';

export interface IQueries {
     createSimpleQuery(): Query;
     createAdvancedQuery(): Query;
     createSearchFilter(): StringFilter | null;
}
