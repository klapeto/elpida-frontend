import {SimpleFilter} from '../simple-filter';
import {NumberSimpleFilterComponent} from '../../components/number-simple-filter/number-simple-filter.component';
import {ComponentFactoryResolver, ViewContainerRef} from '@angular/core';

export class NumberSimpleFilter extends SimpleFilter {

    constructor(public name: string,
                value: number,
                public max?: number,
                public min?: number,
                public suffix?: string) {
        super(name);
        this.value = value;
    }

    public createComponent(componentFactoryResolver: ComponentFactoryResolver, viewContainerRef: ViewContainerRef): any {
        const component = viewContainerRef.createComponent<NumberSimpleFilterComponent>(
            componentFactoryResolver.resolveComponentFactory<NumberSimpleFilterComponent>(NumberSimpleFilterComponent)
        );

        component.instance.filter = this;
        component.instance.max = this.max;
        component.instance.min = this.min;
        component.instance.suffix = this.suffix;
        return component;
    }
}
