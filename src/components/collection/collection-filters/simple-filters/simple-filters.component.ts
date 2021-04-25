import {Component, EventEmitter, Output} from '@angular/core';
import {Query} from '../../../../models/query';
import {Filter} from '../../../../models/filter';
import {ResultsService} from '../../../../services/results.service';

@Component({
  selector: 'app-simple-filters',
  templateUrl: './simple-filters.component.html',
  styleUrls: ['./simple-filters.component.css']
})
export class SimpleFiltersComponent {

  public filters: Filter[];

  @Output() public readonly submitted = new EventEmitter<Query>();

  constructor(public resultsService: ResultsService) {
    this.filters = resultsService.createSimpleFilters();
  }

  public onSubmit() {
    this.submitted.emit(new Query(this.filters, this.resultsService.createDefaultOrderByFilter(), true));
  }

}
