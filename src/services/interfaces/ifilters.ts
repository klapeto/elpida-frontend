import {Filter} from '../../models/filter';
import {StringFilter} from '../../models/filters/string-filter';
import {Query} from '../../models/query';

export interface IFilters {
    createSimpleFilters(): Filter[];
    createAdvancedFilters(): Filter[];
    createOrderByFilters(): Filter[];
    createSearchFilter(): StringFilter;
    createDefaultQuery(): Query;
}
