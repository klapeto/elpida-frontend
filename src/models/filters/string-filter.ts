import {FilterDto} from '../../services/filter-dto';
import {ValueFilter} from '../value-filter';
import {ComponentFactoryResolver, ViewContainerRef} from '@angular/core';
import {StringFilterComponent} from '../../components/collection/filters/string-filter/string-filter.component';
import {Utilities} from '../../services/utilities';

export enum StringComparisons {
    Contains = 'contain',
    NotContain = 'not-contain',
    Equal = 'equal',
    NotEqual = 'not-equal'
}

export class StringFilter extends ValueFilter<string> {

    constructor(title: string,
                internalName: string,
                comparison: StringComparisons = StringComparisons.Contains,
                value?: string) {
        super(title,
            internalName,
            Object.keys(StringFilter.uiComparisonToBackendComparison),
            StringFilter.backendToUiComparison[comparison],
            value
        );
    }

    protected static readonly uiComparisonToBackendComparison: object = {
        'Contains': StringComparisons.Contains,
        'Does not contain': StringComparisons.NotContain,
        'Equals': StringComparisons.Equal,
        'Not equal': StringComparisons.NotEqual
    };

    protected static readonly backendToUiComparison = Utilities.reverseMap(StringFilter.uiComparisonToBackendComparison);

    protected defaultValue = '';

    public createDto(): FilterDto {
        return new FilterDto(
            this.internalName,
            this.value,
            StringFilter.uiComparisonToBackendComparison[this.comparison]
            ?? this.comparison
            ?? StringComparisons.Contains);
    }

    public createComponent(componentFactoryResolver: ComponentFactoryResolver, viewContainerRef: ViewContainerRef): any {
        const component = viewContainerRef.createComponent<StringFilterComponent>(
            componentFactoryResolver.resolveComponentFactory<StringFilterComponent>(StringFilterComponent)
        );

        component.instance.filter = this;
        return component;
    }
}
