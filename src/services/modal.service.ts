import {ComponentFactoryResolver, ComponentRef, Injectable, Type, ViewContainerRef} from '@angular/core';
import {ModalComponent} from '../components/modal/modal.component';

@Injectable({
    providedIn: 'root'
})
export class ModalService {

    private modalComponentRef: ComponentRef<ModalComponent>;

    constructor(private factoryResolver: ComponentFactoryResolver) {
    }

    initialize(viewContainer: ViewContainerRef): void {
        const factory = this.factoryResolver.resolveComponentFactory(ModalComponent);
        this.modalComponentRef = viewContainer.createComponent<ModalComponent>(factory);
    }

    public show<T>(title: string, component: Type<T>, initializer: (component: T) => void): void {
        this.modalComponentRef.instance.show<T>(title, component, initializer);
    }

    public hide(): void {
        this.modalComponentRef.instance.hide();
    }
}
