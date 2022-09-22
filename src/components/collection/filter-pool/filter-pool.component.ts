import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FilterModel} from '../../../models/filter.model';
import {ModalService} from '../../../services/modal.service';
import {NewFilterComponent} from './new-filter/new-filter.component';
import {QueryModel} from '../../../models/query.model';

@Component({
    selector: 'app-filter-pool',
    templateUrl: './filter-pool.component.html',
    styleUrls: ['./filter-pool.component.css']
})
export class FilterPoolComponent implements OnInit {

    @Output()
    public submitted: EventEmitter<QueryModel> = new EventEmitter<QueryModel>();

    @Input()
    public query: QueryModel;

    @Input()
    public availableFilters: FilterModel[];

    // This is needed because for some reason angular reverts the selection to ui after change
    public _availableFilters: FilterModel[];

    public constructor(private modalService: ModalService) {
    }

    public ngOnInit(): void {
        this._availableFilters = this.availableFilters.map(f => f.clone());
        this.query.filters = this.query.filters.filter(f => f.isSet());
    }

    public onCloseClick(filter: FilterModel): void {
        this.query.filters = this.query.filters.filter(f => f !== filter);
    }

    public onSearchClick(): void {
        this.submitted.emit(this.query);
    }

    public onAddClick(): void {
        this.modalService.show<NewFilterComponent>('Add filter', NewFilterComponent, c => {
            c.availableFilters = this._availableFilters.map(f => f.clone());
            const subscription = c.filterAdded.subscribe(f => {
                this.query.filters.push(f);
                this.modalService.hide();
                subscription.unsubscribe();
            });
        });
    }
}
