import {Component} from '@angular/core';
import {OperatingSystemService} from '../../../services/operating-system.service';
import {OperatingSystemModel} from '../../../models/operating-system.model';
import {ImageLinksService} from '../../../services/image-links.service';

@Component({
    selector: 'app-operating-systems',
    templateUrl: './operating-systems.component.html',
    styleUrls: ['./operating-systems.component.css']
})
export class OperatingSystemsComponent {

    public constructor(public readonly osService: OperatingSystemService,
                public readonly imageLinksService: ImageLinksService) {
    }

    public toItem(context: any): OperatingSystemModel {
        return context as OperatingSystemModel;
    }
}
