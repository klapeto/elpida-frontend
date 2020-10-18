import {FilterDto} from '../services/filter-dto';
import {ComponentFactoryResolver, ViewContainerRef} from '@angular/core';

export abstract class Filter {

    protected constructor(public readonly title: string,
                          public readonly internalName: string) {
    }

    public abstract reset(): void;

    public abstract isSet(): boolean;

    public abstract createComponent(componentFactoryResolver: ComponentFactoryResolver, viewContainerRef: ViewContainerRef): any;

    public abstract createDto(): FilterDto;
}
