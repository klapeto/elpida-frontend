import {FilterType} from './filter-type.enum';

export class Filter {
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

    public selected: string;

    public readonly options: string[];

    constructor(public readonly title: string,
                public readonly name: string,
                public readonly type: FilterType,
                public readonly allowComparison: boolean = true,
                public value?: any) {
        if (type === FilterType.String) {
            this.options = Filter.stringOptions;
        } else {
            this.options = Filter.numberOptions;
        }
        this.selected = this.options[0];
    }
}
