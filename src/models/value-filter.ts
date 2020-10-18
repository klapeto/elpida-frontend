import {Filter} from './filter';

export abstract class ValueFilter<T> extends Filter {

    protected constructor(title: string,
                          internalName: string,
                          public allowComparison: boolean,
                          public comparisonModes: string[],
                          public comparison?: string,
                          public value?: T) {
        super(title, internalName);
    }

    protected abstract defaultValue: T;

    public isSet(): boolean {
        return this.comparison !== '' && this.value !== undefined && this.value !== this.defaultValue && this.value !== null;
    }

    private foo(c: new () => T): T{
        return new c();
    }

    public reset(): void {
        this.value = undefined;
        this.comparison = '';
    }
}
