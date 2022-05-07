import {Filter} from './filter';

export abstract class ValueFilter<T> extends Filter {

    private readonly defaultComparison: string;
    private readonly originalValue?: T;

    protected constructor(title: string,
                          internalName: string,
                          public comparisonModes: string[],
                          public comparison?: string,
                          public value?: T) {
        super(title, internalName);
        this.originalValue = value;
        this.defaultComparison = comparison;
    }

    protected abstract defaultValue: T;

    public isSet(): boolean {
        return this.comparison !== ''
            && this.value !== undefined
            && this.value !== this.defaultValue
            && this.value !== null;
    }

    public reset(): void {
        this.value = this.originalValue;
        this.comparison = this.defaultComparison;
    }
}
