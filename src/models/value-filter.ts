import {Filter} from './filter';

export abstract class ValueFilter<T> extends Filter {

    private readonly defaultComparison: string;

    protected constructor(title: string,
                          internalName: string,
                          public allowComparison: boolean,
                          public comparisonModes: string[],
                          public comparison?: string,
                          public value?: T) {
        super(title, internalName);
        this.defaultComparison = comparison;
    }

    protected abstract defaultValue: T;

    public isSet(): boolean {
        return this.comparison !== '' && this.value !== undefined && this.value !== this.defaultValue && this.value !== null;
    }

    public reset(): void {
        this.value = undefined;
        this.comparison = this.defaultComparison;
    }
}
