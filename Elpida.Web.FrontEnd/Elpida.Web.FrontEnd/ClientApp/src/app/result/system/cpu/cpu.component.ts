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

  public getRowClass(): string {
    let childrenCountRoot = Math.ceil(Math.sqrt(this.cpu.cpuCaches.length));
    return "row-cols-"+childrenCountRoot;
  }


  ngOnInit() {
  }

}
