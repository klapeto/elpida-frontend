import {Component, Input} from '@angular/core';
import {ElpidaVersionModel} from '../../../models/elpida/elpida-version.model';
import {ImageLinksService} from '../../../services/image-links.service';

@Component({
    selector: 'app-elpida-view',
    templateUrl: './elpida-view.component.html',
    styleUrls: ['./elpida-view.component.css']
})
export class ElpidaViewComponent {

    @Input() public elpida: ElpidaVersionModel;
    @Input() public largeLogo: boolean = false;

    public constructor(public readonly imageLinksService: ImageLinksService) {
    }
}
