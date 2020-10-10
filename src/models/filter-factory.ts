import {FilterType} from './filter-type.enum';
import {Filter} from './filter';

export class FilterFactory {

    public static readonly stringOptions: string[] = ['Contains', 'Equals'];
    public static readonly numberOptions: string[] = ['>', '>=', '=', '<=', '<'];

    public static readonly uiComparisonToBackendComparison: object = {
        'Contains': 'c',
        'Equals': 'eq',
        '>': 'g',
        '>=': 'ge',
        '=': 'eq',
        '<=': 'le',
        '<': 'l'
    };


    public readonly options: string[];

    constructor(public readonly title: string,
                public readonly name: string,
                public readonly type: FilterType,
                public readonly allowComparison: boolean = true,
                private defaultValue?: any) {
        if (type !== FilterType.String) {
            this.options = FilterFactory.numberOptions;
        } else {
            this.allowComparison = false;
        }
    }

    public create(value: any): Filter {
        return new Filter(this, value ?? this.defaultValue);
    }
}
