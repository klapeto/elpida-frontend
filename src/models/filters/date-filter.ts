import {ValueFilter} from '../value-filter';
import {FilterDto} from '../../services/filter-dto';
import {ComponentFactoryResolver, ViewContainerRef} from '@angular/core';
import {DateFilterComponent} from '../../components/date-filter/date-filter.component';
import {Utilities} from '../../services/utilities';

export enum DateComparisons {
    Greater = 'g',
    GreaterEqual = 'ge',
    Equal = 'eq',
    LessEqual = 'le',
    Less = 'l'
}

export class DateFilter extends ValueFilter<Date> {

    constructor(title: string,
                internalName: string,
                allowComparison: boolean,
                comparison: DateComparisons = DateComparisons.Equal,
                value?: Date) {
        super(title, internalName, allowComparison, [], DateFilter.backendToUiComparison[comparison], value);
    }

    protected static readonly uiComparisonToBackendComparison: object = {
        '>': DateComparisons.Greater,
        '>=': DateComparisons.GreaterEqual,
        '=': DateComparisons.Equal,
        '<=': DateComparisons.LessEqual,
        '<': DateComparisons.Less
    };

    protected static readonly backendToUiComparison = Utilities.reverseMap(DateFilter.uiComparisonToBackendComparison);

    protected defaultValue: Date = new Date();

    public createComponent(componentFactoryResolver: ComponentFactoryResolver, viewContainerRef: ViewContainerRef): any {
        const component = viewContainerRef.createComponent<DateFilterComponent>(
            componentFactoryResolver.resolveComponentFactory<DateFilterComponent>(DateFilterComponent)
        );

        component.instance.filter = this;
        return component;
    }

    public createDto(): FilterDto {
        return new FilterDto(
            (this.value as Date) === undefined ?
                this.value.toISOString() :
                new Date(this.value).toISOString(),
            DateFilter.uiComparisonToBackendComparison[this.comparison]
            ?? this.comparison
            ?? DateComparisons.GreaterEqual);
    }
}
