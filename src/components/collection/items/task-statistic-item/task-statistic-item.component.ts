import {Component, Input, OnInit} from '@angular/core';
import {TaskStatisticsPreview} from '../../../../models/task-statistics/task-statistics-preview';
import {ValueConverter} from '../../../../services/value-converter';
import {ResultType} from '../../../../models/task/result-specification';

@Component({
  selector: 'app-task-statistic-item',
  templateUrl: './task-statistic-item.component.html',
  styleUrls: ['./task-statistic-item.component.css']
})
export class TaskStatisticItemComponent implements OnInit {

  @Input() item: TaskStatisticsPreview;

  constructor(private valueConverter: ValueConverter) { }

  ngOnInit(): void {
  }

  public calculateActualStatisticValue(): string {
    if (this.item.type === ResultType.Throughput) {
      return this.valueConverter.convertToSI(this.item.mean / this.item.time) + this.item.taskResultUnit + '/s';
    }
    return this.valueConverter.convertToSI(this.item.mean) + this.item.taskResultUnit;
  }
}
