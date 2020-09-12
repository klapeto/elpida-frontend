import {AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {Query} from '../../../models/query';
import {Filter} from '../../../models/filter';

@Component({
    selector: 'app-filter-results',
    templateUrl: './filter-results.component.html',
    styleUrls: ['./filter-results.component.css']
})
export class FilterResultsComponent implements AfterViewInit {

    @Input() public readonly query: Query;
    @Input() public readonly orderByFilters: Filter[];
    @Output() public readonly submitted = new EventEmitter();

    @ViewChild('orderBy', {read: null, static: false}) private readonly orderBySelect: ElementRef;

    constructor() {
    }

    public onSubmit(): void {
        this.submitted.emit();
    }

    public onOrderByChanged(event: Event): void {
        const value = (event.target as HTMLSelectElement).value;
        this.query.orderBy = this.orderByFilters.find(x => x.title === value);
    }

    public ngAfterViewInit(): void {
        this.orderBySelect.nativeElement.value = this.query.orderBy.title;
    }

}
