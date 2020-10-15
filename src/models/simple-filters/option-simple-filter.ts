import {SimpleFilter} from '../simple-filter';
import {OptionSimpleFilterComponent} from '../../components/option-simple-filter/option-simple-filter.component';
import {ComponentFactoryResolver, Type, ViewContainerRef} from '@angular/core';

export class OptionSimpleFilter extends SimpleFilter {

    constructor(public name: string, public values: string[]) {
        super(name);
    }

    public createComponent(componentFactoryResolver: ComponentFactoryResolver, viewContainerRef: ViewContainerRef): any {
        const component = viewContainerRef.createComponent<OptionSimpleFilterComponent>(
            componentFactoryResolver.resolveComponentFactory<OptionSimpleFilterComponent>(OptionSimpleFilterComponent)
        );

        component.instance.options = this.values;
        component.instance.filter = this;
        return component;
    }
}
