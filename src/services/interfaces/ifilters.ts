import {Filter} from '../../models/filter';
import {StringFilter} from '../../models/filters/string-filter';

export interface IFilters {
    createSimpleFilters(): Filter[];
    createAdvancedFilters(): Filter[];
    createOrderByFilters(): Filter[];
    createSearchFilter(): StringFilter;
    createDefaultOrderByFilter(): Filter;
}
