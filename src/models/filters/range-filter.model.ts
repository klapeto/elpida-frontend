import {NumberFilterModel} from './number-filter.model';
import {ComparisonModel} from '../comparison.model';

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
}
