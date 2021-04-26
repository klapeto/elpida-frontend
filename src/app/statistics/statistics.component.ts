import { Component, OnInit } from '@angular/core';
import {CpuService} from '../../services/cpu.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  constructor(public cpuService: CpuService) { }

  ngOnInit(): void {
  }

}
