import {Component, Input} from '@angular/core';
import {Cpu} from '../../../../models/cpu/cpu';
import {ValueConverter} from '../../../../services/value-converter';
import {ImageLinksService} from '../../../../services/image-links.service';

@Component({
    selector: 'app-cpu',
    templateUrl: './cpu.component.html',
    styleUrls: ['./cpu.component.css']
})
export class CpuComponent {

    @Input() public readonly cpu: Cpu;

    constructor(public readonly valueConverter: ValueConverter,
                public readonly imageLinksService: ImageLinksService) {
    }

    public getInfoPairs(): { name: string, value: string }[] {
        const returnValue = [];
        if (this.cpu.additionalInfo) {
            Object.keys(this.cpu.additionalInfo).forEach(key => {
                returnValue.push({name: key, value: this.cpu.additionalInfo[key]});
            });
        }

        return returnValue;
    }
}
