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

  constructor() { }

  public formatNumberSI(arg: number): string {
    return ValueConverter.convertToSI(arg);
  }
}
