import {FilterType} from './filter-type.enum';
import {FilterFactory} from './filter-factory';

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

    constructor(public readonly factory: FilterFactory,
                public value?: any) {
        if (factory.type !== FilterType.String) {
            this.selected = Filter.numberOptions[0];
        }
    }
}
