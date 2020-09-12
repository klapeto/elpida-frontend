import {Component, Input} from '@angular/core';
import {System} from '../../../models/result/system';

@Component({
    selector: 'app-system',
    templateUrl: './system.component.html',
    styleUrls: ['./system.component.css']
})
export class SystemComponent {

    @Input() public readonly system: System;
    @Input() public readonly affinity: number[];
}
