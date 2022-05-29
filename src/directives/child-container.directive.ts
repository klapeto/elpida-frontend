import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
    selector: '[appChildContainer]'
})
export class ChildContainerDirective {

    constructor(public readonly viewContainerRef: ViewContainerRef) {
    }

}
