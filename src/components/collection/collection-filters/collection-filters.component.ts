import {Component, EventEmitter, Input, Output} from '@angular/core';
import {QueryModel} from '../../../models/query.model';

@Component({
    selector: 'app-collection-filters',
    templateUrl: './collection-filters.component.html',
    styleUrls: ['./collection-filters.component.css']
})
export class CollectionFiltersComponent {

    @Input() public readonly allowSort: boolean;
    @Input() public readonly allowComparisons: boolean;
    @Input() public query: QueryModel;

    @Output() public readonly submitted = new EventEmitter<QueryModel>();

    public onSubmit(): void {
        this.submitted.emit(this.query);
    }

    public onReset() {
        this.query.filters.forEach(f => f.reset());
    }
}
