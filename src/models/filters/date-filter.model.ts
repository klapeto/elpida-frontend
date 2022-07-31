import {ValueFilterModel} from '../value-filter.model';
import {ComparisonModel} from '../comparison.model';
import {FilterModel} from '../filter.model';

export class DateFilterModel extends ValueFilterModel<Date> {

    protected defaultValue: Date = <Date><unknown>'';

    public constructor(title: string,
                       internalName: string,
                       comparison: ComparisonModel = ComparisonModel.equals(),
                       value?: Date) {
        super(title, internalName, DateFilterModel.numericComparisons, comparison, value);
    }

    public clone(): FilterModel {
        return new DateFilterModel(this.title, this.internalName, this.comparison, this.value);
    }

    public trySetValue(value: any): boolean {
        if (value instanceof Date) {
            this.value = value;
            return true;
        }

        if (typeof value === 'string'
            || typeof value === 'number') {
            this.value = new Date(value);
            return true;
        }

        return false;
    }
}
