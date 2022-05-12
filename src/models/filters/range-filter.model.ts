import {NumberFilterModel} from './number-filter.model';
import {ComparisonModel} from '../comparison.model';
import {FilterModel} from '../filter.model';

export class RangeFilterModel extends NumberFilterModel {

    constructor(title: string,
                internalName: string,
                comparison: ComparisonModel = ComparisonModel.equals(),
                suffix?: string,
                public min?: number,
                public max?: number,
                public step?: number,
                value?: number) {
        super(title, internalName, comparison, suffix, value);
    }

    public clone(): FilterModel {
        return new RangeFilterModel(this.title, this.internalName, this.comparison, this.suffix, this.min, this.max, this.step, this.value);
    }
}
