import { Component, OnInit } from '@angular/core';
import {PagedResult} from '../../models/paged-result';
import {ResultPreview} from '../../models/result-preview';
import {CpuPreview} from '../../models/cpu/cpu-preview';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  public pageCpu: PagedResult<CpuPreview>;
  public maxResultPages: number;
  private resultsPerPage = 10;
  private curCpuPage = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
