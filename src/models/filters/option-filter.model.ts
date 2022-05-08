import {StringFilterModel} from './string-filter.model';
import {ComparisonModel} from '../comparison.model';

export class OptionModel {
    constructor(public readonly displayName: string,
                public readonly internalName: string = displayName) {
    }
}

export class OptionFilterModel extends StringFilterModel {

    public constructor(title: string,
                       internalName: string,
                       public options: OptionModel[],
                       value?: string) {
        super(title, internalName, ComparisonModel.contains(), value);
    }
}
