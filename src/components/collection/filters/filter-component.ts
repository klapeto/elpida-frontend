import {ValueFilterModel} from '../../../models/value-filter.model';

export abstract class FilterComponent<T> {
    public abstract filter: ValueFilterModel<T>;

    public abstract allowComparison: boolean;
}
