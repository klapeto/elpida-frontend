import {ValueFilterModel} from '../../../models/value-filter.model';

export abstract class FilterComponent<T> {
    abstract filter: ValueFilterModel<T>;

    abstract allowComparison: boolean;
}
