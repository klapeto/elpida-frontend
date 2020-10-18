import {ValueFilter} from '../value-filter';
import {FilterDto} from '../../services/filter-dto';
import {ComponentFactoryResolver, ViewContainerRef} from '@angular/core';
import {DateFilterComponent} from '../../components/date-filter/date-filter.component';

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
                comparison?: DateComparisons,
                value?: Date) {
        super(title, internalName, allowComparison, [], comparison, value);
    }

    protected static readonly uiComparisonToBackendComparison: object = {
        '>': DateComparisons.Greater,
        '>=': DateComparisons.GreaterEqual,
        '=': DateComparisons.Equal,
        '<=': DateComparisons.LessEqual,
        '<': DateComparisons.Less
    };

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
            this.value.toISOString(),
            DateFilter.uiComparisonToBackendComparison[this.comparison]
            ?? this.comparison
            ?? DateComparisons.GreaterEqual);
    }
}
