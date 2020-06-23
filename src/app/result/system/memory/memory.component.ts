import {Component, Input} from '@angular/core';
import {Memory} from '../../../../models/memory';
import {ValueConverter} from '../../../../services/value-converter';

@Component({
  selector: 'app-memory',
  templateUrl: './memory.component.html',
  styleUrls: ['./memory.component.css']
})
export class MemoryComponent {

  @Input() public memory: Memory;

  constructor(public valueConverter: ValueConverter) { }
}
