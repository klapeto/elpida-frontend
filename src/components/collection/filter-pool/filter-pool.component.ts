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

    @Input() availableFilters: FilterModel[];
    @Output() submitted: EventEmitter<QueryModel> = new EventEmitter<QueryModel>();

    filters: FilterModel[] = [];

    // This is needed because for some reason angular reverts the selection to ui after change
    _availableFilters: FilterModel[];

    orderBy?: string = null;

    descending: boolean;

    constructor(private modalService: ModalService) {
    }

    ngOnInit(): void {
        this._availableFilters = this.availableFilters.map(f => f.clone());
    }

    onCloseClick(filter: FilterModel) {
        this.filters = this.filters.filter(f => f !== filter);
    }

    onSearchClick() {
        this.submitted.emit(new QueryModel(this.filters, this.orderBy, this.descending));
    }

    onAddClick() {
        this.modalService.show<NewFilterComponent>('Add filter', NewFilterComponent, c => {
            c.availableFilters = this.availableFilters.map(f => f.clone());
            const subscription = c.filterAdded.subscribe(f => {
                this.filters.push(f);
                this.modalService.hide();
                subscription.unsubscribe();
            });
        });
    }
}
