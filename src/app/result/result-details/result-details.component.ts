import {Component, Input, OnInit} from '@angular/core';
import {TaskResult} from '../../../models/result/task-result';

@Component({
  selector: 'app-result-record',
  templateUrl: './result-details.component.html',
  styleUrls: ['./result-details.component.css']
})
export class ResultDetailsComponent implements OnInit {

  @Input() taskResult: TaskResult;

  constructor() { }

  ngOnInit(): void {
  }

}
