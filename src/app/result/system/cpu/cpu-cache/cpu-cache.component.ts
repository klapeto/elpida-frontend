import {Component, Input} from '@angular/core';
import {CpuCache} from '../../../../../models/result/cpu-cache';
import {ValueConverter} from '../../../../../services/value-converter';

@Component({
    selector: 'app-cpu-cache',
    templateUrl: './cpu-cache.component.html',
    styleUrls: ['./cpu-cache.component.css']
})
export class CpuCacheComponent {

    @Input() public readonly cache: CpuCache;

    constructor(public readonly valueConverter: ValueConverter) {
    }
}

