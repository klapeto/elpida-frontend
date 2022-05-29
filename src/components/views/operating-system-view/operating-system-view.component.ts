import {Component, Input} from '@angular/core';
import {ImageLinksService} from '../../../services/image-links.service';
import {OperatingSystemModel} from '../../../models/operating-system.model';

@Component({
    selector: 'app-operating-system-view',
    templateUrl: './operating-system-view.component.html',
    styleUrls: ['./operating-system-view.component.css']
})
export class OperatingSystemViewComponent {

    @Input() public operatingSystem: OperatingSystemModel;
    @Input() public largeLogo: boolean = false;

    public constructor(public readonly imageLinksService: ImageLinksService) {
    }


}
