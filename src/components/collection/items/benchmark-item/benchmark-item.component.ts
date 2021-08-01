import {Component, Input, OnInit} from '@angular/core';
import {BenchmarkPreview} from '../../../../models/benchmark/benchmark-preview';

@Component({
  selector: 'app-benchmark-item',
  templateUrl: './benchmark-item.component.html',
  styleUrls: ['./benchmark-item.component.css']
})
export class BenchmarkItemComponent implements OnInit {

  @Input() item: BenchmarkPreview;
  @Input() routePrefix = 'benchmark';

  constructor() { }

  ngOnInit(): void {
  }

}
