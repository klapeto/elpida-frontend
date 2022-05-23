import {Component} from '@angular/core';
import {CpuService} from '../../../services/cpu.service';
import {CpuPreview} from '../../../models/cpu/cpu-preview';
import {ImageLinksService} from '../../../services/image-links.service';

@Component({
    selector: 'app-cpus',
    templateUrl: './cpus.component.html',
    styleUrls: ['./cpus.component.css']
})
export class CpusComponent {

    constructor(public readonly cpuService: CpuService,
                public readonly imageLinksService: ImageLinksService) {
    }

    public toItem(context: any): CpuPreview {
        return context as CpuPreview;
    }

}
