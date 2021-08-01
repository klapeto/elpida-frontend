import {Component, Input, OnInit} from '@angular/core';
import {BenchmarkService} from '../../../services/benchmark.service';

@Component({
  selector: 'app-benchmarks',
  templateUrl: './benchmarks.component.html',
  styleUrls: ['./benchmarks.component.css']
})
export class BenchmarksComponent implements OnInit {

  @Input() customRoute: string = 'benchmark';

  constructor(public benchmarkService: BenchmarkService) { }

  ngOnInit(): void {
  }

}
