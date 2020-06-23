import {Component, Input} from '@angular/core';
import {System} from '../../../models/system';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.css']
})
export class SystemComponent {

  @Input() public system: System;
  @Input() public affinity: number[];
}
