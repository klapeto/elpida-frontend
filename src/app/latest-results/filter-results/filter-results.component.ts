import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Filter} from '../../../models/filter';

@Component({
  selector: 'app-filter-results',
  templateUrl: './filter-results.component.html',
  styleUrls: ['./filter-results.component.css']
})
export class FilterResultsComponent implements OnInit {

  @Input() filters: Filter[];
  @Output() submitted = new EventEmitter();

  constructor() {
  }

  public onSubmit() {
    this.submitted.emit();
  }

  ngOnInit() {
  }

}
