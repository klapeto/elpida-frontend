import {Component, Input} from '@angular/core';
import {TaskResult} from '../../../models/result/task-result';
import {ValueConverter} from '../../../services/value-converter';

@Component({
  selector: 'app-result-record',
  templateUrl: './result-details.component.html',
  styleUrls: ['./result-details.component.css']
})
export class ResultDetailsComponent {

  @Input() taskResult: TaskResult;

  constructor(private valueConverter: ValueConverter) { }

  public formatNumberSI(arg: number): string {
    return this.valueConverter.toStringSI(arg);
  }
}
