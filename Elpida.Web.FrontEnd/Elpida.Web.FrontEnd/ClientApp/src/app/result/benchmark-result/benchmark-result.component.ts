import {Component, Input, OnInit} from '@angular/core';
import {BenchmarkResult} from "../../../models/benchmark-result";
import {ValueConverter} from "../../../services/value-converter";

@Component({
  selector: 'app-benchmark-result',
  templateUrl: './benchmark-result.component.html',
  styleUrls: ['./benchmark-result.component.css']
})
export class BenchmarkResultComponent implements OnInit {

  @Input() public benchmarkResult: BenchmarkResult;

  constructor(public valueConverter: ValueConverter) { }

  ngOnInit() {
  }

}
