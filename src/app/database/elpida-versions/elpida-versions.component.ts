import {Component} from '@angular/core';
import {ElpidaVersionService} from '../../../services/elpida-version.service';
import {ElpidaVersionModel} from '../../../models/elpida/elpida-version.model';
import {ImageLinksService} from '../../../services/image-links.service';

@Component({
    selector: 'app-elpida-versions',
    templateUrl: './elpida-versions.component.html',
    styleUrls: ['./elpida-versions.component.css']
})
export class ElpidaVersionsComponent {

    constructor(public readonly elpidaVersionService: ElpidaVersionService,
                public readonly imageLinksService: ImageLinksService) {
    }

    public toItem(context: any): ElpidaVersionModel {
        return context as ElpidaVersionModel;
    }
}
