import {Component, Input, OnInit} from '@angular/core';
import {BenchmarkStatisticsPreview} from '../../../../models/benchmark-statistics/benchmark-statistics-preview';
import {ValueConverter} from '../../../../services/value-converter';

@Component({
  selector: 'app-benchmark-statistic-item',
  templateUrl: './benchmark-statistic-item.component.html',
  styleUrls: ['./benchmark-statistic-item.component.css']
})
export class BenchmarkStatisticItemComponent implements OnInit {

  @Input() item: BenchmarkStatisticsPreview;

  constructor(private valueConverter: ValueConverter) { }

  ngOnInit(): void {
  }

  public calculateActualStatisticValue(): string {
    return this.valueConverter.convertToSI(this.item.mean) + this.item.benchmarkScoreUnit;
  }
}
