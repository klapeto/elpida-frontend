import {AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {Query} from '../../../../models/query';
import {Filter} from '../../../../models/filter';
import {FiltersService} from '../../../../services/filters.service';

@Component({
  selector: 'app-custom-filters',
  templateUrl: './custom-filters.component.html',
  styleUrls: ['./custom-filters.component.css']
})
export class CustomFiltersComponent implements AfterViewInit {

  @Output() public readonly submitted = new EventEmitter<Query>();

  @ViewChild('orderBy', {read: null}) private readonly orderBySelect: ElementRef;

  public filters: Filter[];

  public orderByFilters: Filter[];

  public orderBy: Filter;

  public descending: boolean = true;

  constructor(private filterService: FiltersService) {
    this.filters = filterService.filterFactories.map(f => f.create(undefined));
    this.orderByFilters = filterService.orderByFilterFactories.map(f => f.create(undefined));
    this.orderBy = filterService.defaultOrderByFilter.create(undefined);
  }

  public onSubmit(): void {
    this.submitted.emit(new Query(this.filters, this.orderBy, this.descending));
  }

  public onReset(): void {
    this.filters.forEach(f => {
      f.value = undefined;
    });
  }

  public onOrderByChanged(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    this.orderBy = this.orderByFilters.find(x => x.factory.title === value);
  }

  public ngAfterViewInit(): void {
    this.orderBySelect.nativeElement.value = this.orderBy.factory.title;
  }

}
