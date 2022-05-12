import {ValueFilterModel} from '../value-filter.model';
import {ComparisonModel} from '../comparison.model';
import {FilterModel} from '../filter.model';

export class NumberFilterModel extends ValueFilterModel<number> {

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

    protected defaultValue = 0;

    public clone(): FilterModel {
        return new NumberFilterModel(this.title, this.internalName, this.comparison, this.suffix, this.value);
    }
}
