import {ValueFilterModel} from '../value-filter.model';
import {ComparisonModel} from '../comparison.model';

export class StringFilterModel extends ValueFilterModel<string> {
    constructor(title: string,
                internalName: string,
                comparison: ComparisonModel = ComparisonModel.contains(),
                value?: string) {
        super(title,
            internalName,
            StringFilterModel.stringComparisons,
            comparison,
            value
        );
    }

    protected defaultValue = '';
}
