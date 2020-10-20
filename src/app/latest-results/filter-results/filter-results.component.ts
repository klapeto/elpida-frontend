import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Query} from '../../../models/query';
import {Filter} from '../../../models/filter';

@Component({
    selector: 'app-filter-results',
    templateUrl: './filter-results.component.html',
    styleUrls: ['./filter-results.component.css']
})
export class FilterResultsComponent {

    @Input() public readonly query: Query;
    @Input() public readonly orderByFilters: Filter[];

    @Output() public readonly submitted = new EventEmitter<Query>();

    public advanced: boolean;

    public onSubmit(query: Query): void {
        this.submitted.emit(query);
    }
}
