import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
    selector: '[appChildContainer]'
})
export class ChildContainerDirective {

    public constructor(public readonly viewContainerRef: ViewContainerRef) {
    }
}
