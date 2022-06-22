import {Component, ComponentFactoryResolver, Input, TemplateRef, Type, ViewChild} from '@angular/core';
import {ChildContainerDirective} from '../../directives/child-container.directive';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css']
})
export class ModalComponent {

    @Input()
    public title: string;

    @ViewChild(ChildContainerDirective, {static: true})
    public modalContent: ChildContainerDirective;

    @ViewChild('messageTemplate')
    public messageTemplate: TemplateRef<{ context: string }>;

    public isShown: boolean = false;

    public constructor(private componentResolver: ComponentFactoryResolver) {
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

    public showTemplate<T>(title: string, template: TemplateRef<T>, initializer: (template: T) => void): void {
        this.title = title;

        const viewContainerRef = this.modalContent.viewContainerRef;
        viewContainerRef.clear();

        const templateRef = viewContainerRef.createEmbeddedView(template);
        initializer(templateRef.context);
        this.isShown = true;
    }

    public showMessage(title: string, message: string): void {
        this.title = title;

        const viewContainerRef = this.modalContent.viewContainerRef;
        viewContainerRef.clear();

        viewContainerRef.createEmbeddedView(this.messageTemplate, { context: message});
        this.isShown = true;
    }
}
