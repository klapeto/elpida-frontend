import {FilterType} from './filter-type.enum';
import {FilterFactory} from './filter-factory';

export class Filter {
    public selected: string;

    constructor(public readonly factory: FilterFactory,
                public value?: any) {
        if (factory.type !== FilterType.String) {
            this.selected = FilterFactory.numberOptions[0];
        }
    }
}
