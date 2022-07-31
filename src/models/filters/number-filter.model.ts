import {ValueFilterModel} from '../value-filter.model';
import {ComparisonModel} from '../comparison.model';
import {FilterModel} from '../filter.model';

export class NumberFilterModel extends ValueFilterModel<number> {

    protected defaultValue: number = 0;

    public constructor(title: string,
                       internalName: string,
                       comparison: ComparisonModel = ComparisonModel.equals(),
                       public suffix?: string,
                       value?: number) {
        super(title,
            internalName,
            NumberFilterModel.numericComparisons,
            comparison,
            value);
    }

    public clone(): FilterModel {
        return new NumberFilterModel(this.title, this.internalName, this.comparison, this.suffix, this.value);
    }

    public trySetValue(value: any): boolean {
        if (typeof value === 'number') {
            this.value = value;
            return true;
        }

        if (typeof value === 'string') {
            const parsed = Number.parseFloat(value);
            if (!isNaN(parsed)) {
                this.value = parsed;
                return true;
            }
        }

        return false;
    }
}
