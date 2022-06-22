import {AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {Query} from '../../../../models/query';
import {Filter} from '../../../../models/filter';
import {FiltersService} from '../../../../services/filters.service';

@Component({
    selector: 'app-custom-filters',
    templateUrl: './advanced-filters.component.html',
    styleUrls: ['./advanced-filters.component.css']
})
export class AdvancedFiltersComponent implements AfterViewInit {

    @Output() public readonly submitted = new EventEmitter<Query>();

    @ViewChild('orderBy', {read: null}) private readonly orderBySelect: ElementRef;

    public filters: Filter[];

    public orderByFilters: Filter[];

    public orderBy: Filter;

    public descending = true;

    constructor(private filterService: FiltersService) {
        this.filters = filterService.createAdvancedFilters();
        this.orderByFilters = filterService.createOrderByFilters();
        this.orderBy = filterService.createDefaultOrderByFilter();
    }

    public onSubmit(): void {
        this.submitted.emit(new Query(this.filters, this.orderBy, this.descending));
    }

    public onReset(): void {
        this.filters.forEach(f => {
            f.reset();
        });
    }

    public onOrderByChanged(event: Event): void {
        const value = (event.target as HTMLSelectElement).value;
        this.orderBy = this.orderByFilters.find(x => x.title === value);
    }

    public ngAfterViewInit(): void {
        this.orderBySelect.nativeElement.value = this.orderBy.title;
    }

}
