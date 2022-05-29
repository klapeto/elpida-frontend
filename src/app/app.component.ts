import {Component, ViewContainerRef} from '@angular/core';
import {ModalService} from '../services/modal.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    public title: string = 'app';

    public constructor(private modalService: ModalService,
                private viewContainerRef: ViewContainerRef) {
        this.modalService.initialize(this.viewContainerRef);
    }
}
