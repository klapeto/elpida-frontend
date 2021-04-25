import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Query} from '../../../models/query';
import {Filter} from '../../../models/filter';

@Component({
    selector: 'app-collection-filters',
    templateUrl: './collection-filters.component.html',
    styleUrls: ['./collection-filters.component.css']
})
export class CollectionFiltersComponent {

    @Input() public readonly query: Query;
    @Input() public readonly orderByFilters: Filter[];

    @Output() public readonly submitted = new EventEmitter<Query>();

    public advanced: boolean;

    public onSubmit(query: Query): void {
        this.submitted.emit(query);
    }
}
