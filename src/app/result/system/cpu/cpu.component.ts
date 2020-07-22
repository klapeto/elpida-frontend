import {Component, Input} from '@angular/core';
import {Cpu} from '../../../../models/cpu';
import {ValueConverter} from '../../../../services/value-converter';

@Component({
  selector: 'app-cpu',
  templateUrl: './cpu.component.html',
  styleUrls: ['./cpu.component.css']
})
export class CpuComponent {

  @Input() cpu: Cpu;

  constructor(public valueConverter: ValueConverter) { }
}
