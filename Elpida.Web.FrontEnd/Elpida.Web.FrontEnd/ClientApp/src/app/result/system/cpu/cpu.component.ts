import {Component, Input, OnInit} from '@angular/core';
import {Cpu} from "../../../../models/cpu";
import {ValueConverter} from "../../../../services/value-converter";

@Component({
  selector: 'app-cpu',
  templateUrl: './cpu.component.html',
  styleUrls: ['./cpu.component.css']
})
export class CpuComponent implements OnInit {

  @Input() cpu: Cpu;

  constructor(public valueConverter: ValueConverter) { }

  ngOnInit() {
  }

}
