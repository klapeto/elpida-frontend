import {ValueFilterModel} from '../value-filter.model';
import {ComparisonModel} from '../comparison.model';

export class DateFilterModel extends ValueFilterModel<Date> {

    constructor(title: string,
                internalName: string,
                comparison: ComparisonModel = ComparisonModel.equals(),
                value?: Date) {
        super(title, internalName, DateFilterModel.numericComparisons, comparison, value);
    }

    protected defaultValue: Date = <Date><unknown>'';
}
