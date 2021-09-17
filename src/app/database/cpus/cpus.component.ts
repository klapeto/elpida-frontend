import { Component, OnInit } from '@angular/core';
import {CpuService} from '../../../services/cpu.service';

@Component({
  selector: 'app-cpus',
  templateUrl: './cpus.component.html',
  styleUrls: ['./cpus.component.css']
})
export class CpusComponent implements OnInit {

  constructor(public readonly cpuService: CpuService) { }

  ngOnInit(): void {
  }

}
