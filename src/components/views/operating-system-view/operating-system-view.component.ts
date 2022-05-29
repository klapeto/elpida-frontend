import {Component, Input} from '@angular/core';
import {ImageLinksService} from '../../../services/image-links.service';
import {OperatingSystemModel} from '../../../models/operating-system.model';

@Component({
    selector: 'app-operating-system-view',
    templateUrl: './operating-system-view.component.html',
    styleUrls: ['./operating-system-view.component.css']
})
export class OperatingSystemViewComponent {

    @Input() operatingSystem: OperatingSystemModel;

    constructor(public imageLinksService: ImageLinksService) {
    }


}
