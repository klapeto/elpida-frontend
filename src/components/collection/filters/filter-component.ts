import {ValueFilterModel} from '../../../models/value-filter.model';

export abstract class FilterComponent<T extends ValueFilterModel<any>> {
    public abstract filter: T;

    public abstract allowComparison: boolean;
}
