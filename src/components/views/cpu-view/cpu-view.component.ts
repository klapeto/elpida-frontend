import {Component, Input} from '@angular/core';
import {CpuModel} from '../../../models/cpu/cpu.model';
import {ValueConverter} from '../../../services/value-converter';
import {ImageLinksService} from '../../../services/image-links.service';

@Component({
    selector: 'app-cpu-view',
    templateUrl: './cpu-view.component.html',
    styleUrls: ['./cpu-view.component.css']
})
export class CpuViewComponent {

    @Input() public cpu: CpuModel;

    public constructor(
        public readonly imageLinksService: ImageLinksService,
        public readonly valueConverter: ValueConverter) {
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
