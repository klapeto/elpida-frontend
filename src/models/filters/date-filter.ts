import {ValueFilter} from '../value-filter';
import {FilterDto} from '../../services/filter-dto';
import {ComponentFactoryResolver, ViewContainerRef} from '@angular/core';
import {DateFilterComponent} from '../../components/collection/filters/date-filter/date-filter.component';
import {Utilities} from '../../services/utilities';

export enum DateComparisons {
    Greater = 'greater',
    GreaterEqual = 'greater-equal',
    Equal = 'equal',
    LessEqual = 'less-equal',
    Less = 'less'
}

export class DateFilter extends ValueFilter<Date> {

    constructor(title: string,
                internalName: string,
                comparison: DateComparisons = DateComparisons.Equal,
                value?: Date) {
        super(title, internalName, [], DateFilter.backendToUiComparison[comparison], value);
    }

    protected static readonly uiComparisonToBackendComparison: object = {
        '>': DateComparisons.Greater,
        '>=': DateComparisons.GreaterEqual,
        '=': DateComparisons.Equal,
        '<=': DateComparisons.LessEqual,
        '<': DateComparisons.Less
    };

    protected static readonly backendToUiComparison = Utilities.reverseMap(DateFilter.uiComparisonToBackendComparison);

    protected defaultValue: Date = <Date><unknown>'';

    public createComponent(componentFactoryResolver: ComponentFactoryResolver, viewContainerRef: ViewContainerRef): any {
        const component = viewContainerRef.createComponent<DateFilterComponent>(
            componentFactoryResolver.resolveComponentFactory<DateFilterComponent>(DateFilterComponent)
        );

        component.instance.filter = this;
        return component;
    }

    public createDto(): FilterDto {
        return new FilterDto(
            this.internalName,
            (this.value as Date) === undefined ?
                this.value.toISOString() :
                new Date(this.value).toISOString(),
            DateFilter.uiComparisonToBackendComparison[this.comparison]
            ?? this.comparison
            ?? DateComparisons.GreaterEqual);
    }
}
