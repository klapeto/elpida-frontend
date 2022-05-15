import {ValueFilterModel} from '../value-filter.model';
import {ComparisonModel} from '../comparison.model';
import {FilterModel} from '../filter.model';

export class DateFilterModel extends ValueFilterModel<Date> {

    constructor(title: string,
                internalName: string,
                comparison: ComparisonModel = ComparisonModel.equals(),
                value?: Date) {
        super(title, internalName, DateFilterModel.numericComparisons, comparison, value);
    }

    protected defaultValue: Date = <Date><unknown>'';

    public clone(): FilterModel {
        return new DateFilterModel(this.title, this.internalName, this.comparison, this.value);
    }
}