import {Component, Input, OnInit} from '@angular/core';
import {Result} from "../../models/result";
import {DummyDataService} from "../../services/dummy-data.service.ts";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
  providers:[DummyDataService]
})
export class ResultComponent implements OnInit {
  @Input() result : Result;

  constructor(private dummyDataService: DummyDataService) {
    this.result = dummyDataService.getData();
  }

  ngOnInit() {
  }
}
