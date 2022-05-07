import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Query} from '../../../models/query';

@Component({
    selector: 'app-collection-filters',
    templateUrl: './collection-filters.component.html',
    styleUrls: ['./collection-filters.component.css']
})
export class CollectionFiltersComponent {

    @Input() public readonly allowSort: boolean;
    @Input() public query: Query;

    @Output() public readonly submitted = new EventEmitter<Query>();

    public onSubmit(): void {
        this.submitted.emit(this.query);
    }

    public onReset() {
        this.query.filters.forEach(f => f.reset());
    }
}
