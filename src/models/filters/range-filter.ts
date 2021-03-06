import {NumberComparisons, NumberFilter} from './number-filter';
import {ComponentFactoryResolver, ViewContainerRef} from '@angular/core';
import {RangeFilterComponent} from '../../components/range-filter/range-filter.component';

export class RangeFilter extends NumberFilter {

    constructor(title: string,
                internalName: string,
                allowComparison: boolean,
                comparison: NumberComparisons = NumberComparisons.Equal,
                suffix?: string,
                public min?: number,
                public max?: number,
                public step?: number,
                value?: number) {
        super(title, internalName, allowComparison, comparison, suffix, value);
    }

    public createComponent(componentFactoryResolver: ComponentFactoryResolver, viewContainerRef: ViewContainerRef): any {
        const component = viewContainerRef.createComponent<RangeFilterComponent>(
            componentFactoryResolver.resolveComponentFactory<RangeFilterComponent>(RangeFilterComponent)
        );

        component.instance.filter = this;
        component.instance.max = this.max;
        component.instance.min = this.min;
        component.instance.step = this.step;
        component.instance.suffix = this.suffix;

        return component;
    }
}
