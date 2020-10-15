import {ComponentFactoryResolver, ViewContainerRef} from '@angular/core';

export abstract class SimpleFilter {

    public value: any;

    protected constructor(public readonly name: string) {
    }

    public abstract createComponent(componentFactoryResolver: ComponentFactoryResolver, viewContainerRef: ViewContainerRef): any;
}
