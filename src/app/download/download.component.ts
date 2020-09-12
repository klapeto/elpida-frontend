import {Component} from '@angular/core';
import {LinksService} from '../../services/links.service';

@Component({
    selector: 'app-download',
    templateUrl: './download.component.html',
    styleUrls: ['./download.component.css']
})
export class DownloadComponent {
    constructor(public readonly linksService: LinksService) {

    }
}
