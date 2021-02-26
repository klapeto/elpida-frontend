import {Component, EventEmitter, Output} from '@angular/core';
import {Query} from '../../../../models/query';
import {Filter} from '../../../../models/filter';
import {FiltersService} from '../../../../services/filters.service';

@Component({
  selector: 'app-simple-filters',
  templateUrl: './simple-filters.component.html',
  styleUrls: ['./simple-filters.component.css']
})
export class SimpleFiltersComponent {

  public filters: Filter[];

  @Output() public readonly submitted = new EventEmitter<Query>();

  constructor(public filtersService: FiltersService) {
    this.filters = filtersService.createSimpleFilters();
  }

  public onSubmit() {
    this.submitted.emit(new Query(this.filters, this.filtersService.createDefaultOrderByFilter(), true));
  }

}
