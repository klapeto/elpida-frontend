import {FilterType} from './filter-type.enum';

export class Filter {
    public static stringOptions: string[] = ['Contains', 'Equals'];
    public static numberOptions: string[] = ['>', '>=', '=', '<=', '<'];

    public static uiComparisonToBackendComparison: object = {
        'Contains': 'c',
        'Equals': 'eq',
        '>': 'g',
        '>=': 'ge',
        '=': 'eq',
        '<=': 'le',
        '<': 'l'
    };

    public selected: string;

    public options: string[];

    constructor(public title: string, public name: string, public type: FilterType, public allowComparison: boolean = true, public value?: any) {
        if (type === FilterType.String) {
            this.options = Filter.stringOptions;
        } else {
            this.options = Filter.numberOptions;
        }
        this.selected = this.options[0];
    }
}
