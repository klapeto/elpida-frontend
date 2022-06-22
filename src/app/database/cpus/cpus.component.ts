import {Component} from '@angular/core';
import {CpuService} from '../../../services/cpu.service';
import {CpuPreviewModel} from '../../../models/cpu/cpu-preview.model';
import {ImageLinksService} from '../../../services/image-links.service';

@Component({
    selector: 'app-cpus',
    templateUrl: './cpus.component.html',
    styleUrls: ['./cpus.component.css']
})
export class CpusComponent {

    public constructor(public readonly cpuService: CpuService,
                       public readonly imageLinksService: ImageLinksService) {
    }

    public toItem(context: object): CpuPreviewModel {
        return context as CpuPreviewModel;
    }

}
