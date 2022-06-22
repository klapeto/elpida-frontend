import {Component, Input} from '@angular/core';
import {Memory} from '../../../../models/result/memory';
import {ValueConverter} from '../../../../services/value-converter';

@Component({
    selector: 'app-memory',
    templateUrl: './memory.component.html',
    styleUrls: ['./memory.component.css']
})
export class MemoryComponent {

    @Input() public readonly memory: Memory;

    constructor(public readonly valueConverter: ValueConverter) {
    }
}
