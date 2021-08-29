import {Component, Input, OnInit} from '@angular/core';
import {ResultPreview} from '../../../../models/result/result-preview';
import {ValueConverter} from '../../../../services/value-converter';

@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.css']
})
export class ResultItemComponent implements OnInit {

  @Input() item: ResultPreview;

  constructor(private valueConverter: ValueConverter) { }

  ngOnInit(): void {
  }

  public getTimestamp(timestamp: Date): Date {
    return new Date(Date.parse(timestamp.toString()));
  }

  public calculateActualStatisticValue(): string {
    return this.valueConverter.convertToSI(this.item.score) + this.item.benchmarkScoreUnit;
  }
}
