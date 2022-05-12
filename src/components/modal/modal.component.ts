import {Component, ComponentFactoryResolver, Input, Type, ViewChild} from '@angular/core';
import {ChildContainerDirective} from '../../directives/child-container.directive';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css']
})
export class ModalComponent {

    @Input() public title: string;
    @ViewChild(ChildContainerDirective, {static: true}) modalContent: ChildContainerDirective;
    public isShown = false;

    constructor(private componentResolver: ComponentFactoryResolver) {
    }

    public hide(): void {
        this.isShown = false;
    }

    public show<T>(title: string, component: Type<T>, initializer: (component: T) => void): void {
        this.title = title;
        const factory = this.componentResolver.resolveComponentFactory(component);

        const viewContainerRef = this.modalContent.viewContainerRef;
        viewContainerRef.clear();

        const componentRef = viewContainerRef.createComponent<T>(factory);
        initializer(componentRef.instance);
        this.isShown = true;
    }
}
