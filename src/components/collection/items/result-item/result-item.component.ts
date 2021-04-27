import {Component, Input, OnInit} from '@angular/core';
import {ResultPreview} from '../../../../models/result/result-preview';

@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.css']
})
export class ResultItemComponent implements OnInit {

  @Input() item: ResultPreview;

  constructor() { }

  ngOnInit(): void {
  }

  public getTimestamp(timestamp: Date): Date {
    return new Date(Date.parse(timestamp.toString()));
  }
}
