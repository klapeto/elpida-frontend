import {ValueFilter} from '../value-filter';
import {FilterDto} from '../../services/filter-dto';
import {ComponentFactoryResolver, ViewContainerRef} from '@angular/core';
import {NumberFilterComponent} from '../../components/number-filter/number-filter.component';
import {Utilities} from '../../services/utilities';

export enum NumberComparisons {
    Greater = 'g',
    GreaterEqual = 'ge',
    Equal = 'eq',
    LessEqual = 'le',
    Less = 'l'
}

export class NumberFilter extends ValueFilter<number> {

    public constructor(title: string,
                       internalName: string,
                       allowComparison: boolean,
                       comparison: NumberComparisons = NumberComparisons.Equal,
                       public suffix?: string,
                       value?: number) {
        super(title,
            internalName,
            allowComparison,
            Object.keys(NumberFilter.uiComparisonToBackendComparison),
            NumberFilter.backendToUiComparison[comparison],
            value);
    }

    protected static readonly uiComparisonToBackendComparison: object = {
        '>': NumberComparisons.Greater,
        '>=': NumberComparisons.GreaterEqual,
        '=': NumberComparisons.Equal,
        '<=': NumberComparisons.LessEqual,
        '<': NumberComparisons.Less
    };

    protected static readonly backendToUiComparison = Utilities.reverseMap(NumberFilter.uiComparisonToBackendComparison);

    protected defaultValue = 0;

    public createDto(): FilterDto {
        // TODO: Checks?
        return new FilterDto(
            this.value,
            NumberFilter.uiComparisonToBackendComparison[this.comparison]
            ?? this.comparison
            ?? NumberComparisons.Equal
        );
    }

    public createComponent(componentFactoryResolver: ComponentFactoryResolver, viewContainerRef: ViewContainerRef): any {
        const component = viewContainerRef.createComponent<NumberFilterComponent>(
            componentFactoryResolver.resolveComponentFactory<NumberFilterComponent>(NumberFilterComponent)
        );

        component.instance.filter = this;
        return component;
    }
}
