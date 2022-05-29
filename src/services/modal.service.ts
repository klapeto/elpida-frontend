import {ComponentFactoryResolver, ComponentRef, Injectable, TemplateRef, Type, ViewContainerRef} from '@angular/core';
import {ModalComponent} from '../components/modal/modal.component';

@Injectable({
    providedIn: 'root'
})
export class ModalService {

    private modalComponentRef: ComponentRef<ModalComponent>;

    public constructor(private factoryResolver: ComponentFactoryResolver) {
    }

    public initialize(viewContainer: ViewContainerRef): void {
        const factory = this.factoryResolver.resolveComponentFactory(ModalComponent);
        this.modalComponentRef = viewContainer.createComponent<ModalComponent>(factory);
    }

    public show<T>(title: string, component: Type<T>, initializer: (component: T) => void): void {
        this.modalComponentRef.instance.show<T>(title, component, initializer);
    }

    public showTemplate<T>(title: string, template: TemplateRef<T>, initializer: (template: T) => void): void {
        this.modalComponentRef.instance.showTemplate<T>(title, template, initializer);
    }

    public showMessage(title: string, message: string): void {
        this.modalComponentRef.instance.showMessage(title, message);
    }

    public hide(): void {
        this.modalComponentRef.instance.hide();
    }
}
