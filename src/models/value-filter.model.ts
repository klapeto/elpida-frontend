import {FilterModel} from './filter.model';
import {ComparisonModel} from './comparison.model';

export abstract class ValueFilterModel<T> extends FilterModel {

    public static allComparisons: ComparisonModel[] = [
        ComparisonModel.equals(),
        ComparisonModel.notEqual(),
        ComparisonModel.contains(),
        ComparisonModel.notContain(),
        ComparisonModel.greater(),
        ComparisonModel.greaterEqual(),
        ComparisonModel.less(),
        ComparisonModel.lessEqual(),
    ];

    public static numericComparisons: ComparisonModel[] = [
        ComparisonModel.equals(),
        ComparisonModel.notEqual(),
        ComparisonModel.greater(),
        ComparisonModel.greaterEqual(),
        ComparisonModel.less(),
        ComparisonModel.lessEqual(),
    ];

    public static stringComparisons: ComparisonModel[] = [
        ComparisonModel.equals(),
        ComparisonModel.notEqual(),
        ComparisonModel.contains(),
        ComparisonModel.notContain()
    ];

    protected abstract defaultValue: T;

    private readonly defaultComparison: ComparisonModel;
    private readonly originalValue?: T;

    protected constructor(title: string,
                          internalName: string,
                          public allowedComparisons: ComparisonModel[] = ValueFilterModel.allComparisons,
                          public comparison?: ComparisonModel,
                          public value?: T) {
        super(title, internalName);
        this.originalValue = value;
        this.defaultComparison = comparison;
    }

    public abstract trySetValue(value: any): boolean;

    public isSet(): boolean {
        return this.comparison !== null
            && this.value !== undefined
            && this.value !== this.defaultValue
            && this.value !== null;
    }

    public reset(): void {
        this.value = this.originalValue;
        this.comparison = this.defaultComparison;
    }
}
