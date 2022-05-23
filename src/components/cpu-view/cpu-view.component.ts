import {Component, Input} from '@angular/core';
import {Cpu} from '../../models/cpu/cpu';
import {ValueConverter} from '../../services/value-converter';
import {ImageLinksService} from '../../services/image-links.service';

@Component({
    selector: 'app-cpu-view',
    templateUrl: './cpu-view.component.html',
    styleUrls: ['./cpu-view.component.css']
})
export class CpuViewComponent {

    @Input() cpu: Cpu;

    constructor(
        public imageLinksService: ImageLinksService,
        public valueConverter: ValueConverter) {
    }

    public getCpuInfoPairs(): { name: string, value: string }[] {
        const returnValue = [];
        if (this.cpu.additionalInfo) {
            Object.keys(this.cpu.additionalInfo).forEach(key => {
                returnValue.push({name: key, value: this.cpu.additionalInfo[key]});
            });
        }

        return returnValue;
    }

}
