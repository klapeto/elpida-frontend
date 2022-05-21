import {Component, ViewContainerRef} from '@angular/core';
import {ModalService} from '../services/modal.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    title = 'app';

    constructor(private modalService: ModalService,
                private viewContainerRef: ViewContainerRef) {
        this.modalService.initialize(this.viewContainerRef);
    }
}
