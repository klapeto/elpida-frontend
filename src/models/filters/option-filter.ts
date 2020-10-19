import {StringComparisons, StringFilter} from './string-filter';
import {ComponentFactoryResolver, ViewContainerRef} from '@angular/core';
import {OptionFilterComponent} from '../../components/option-filter/option-filter.component';
import {FilterDto} from '../../services/filter-dto';


export interface OptionFilterMap {
    [index: string]: string;
}

export class OptionFilter extends StringFilter {

    public constructor(title: string,
                internalName: string,
                public options: string[],
                private optionsMap?: OptionFilterMap,
                value?: string) {
        super(title, internalName, false, StringComparisons.Contains, value);
    }

    public createDto(): FilterDto {
        return new FilterDto(this.optionsMap !== undefined ?
            this.optionsMap[this.value] ?? this.value : this.value, StringComparisons.Contains);
    }

    public createComponent(componentFactoryResolver: ComponentFactoryResolver, viewContainerRef: ViewContainerRef): any {
        const component = viewContainerRef.createComponent<OptionFilterComponent>(
            componentFactoryResolver.resolveComponentFactory<OptionFilterComponent>(OptionFilterComponent)
        );

        component.instance.filter = this;
        component.instance.options = this.options;

        return component;
    }
}
