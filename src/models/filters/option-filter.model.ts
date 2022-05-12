import {StringFilterModel} from './string-filter.model';
import {ComparisonModel} from '../comparison.model';
import {OptionModel} from '../option.model';
import {FilterModel} from '../filter.model';

export class OptionFilterModel extends StringFilterModel {

    public constructor(title: string,
                       internalName: string,
                       public options: OptionModel[],
                       value?: string) {
        super(title, internalName, ComparisonModel.contains(), value);
    }

    public clone(): FilterModel {
        return new OptionFilterModel(this.title, this.internalName, this.options, this.value);
    }
}
