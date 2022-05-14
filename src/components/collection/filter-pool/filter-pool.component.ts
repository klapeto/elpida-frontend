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

    orderBy?: string = null;

    descending: boolean;

    constructor(private modalService: ModalService) {
    }

    ngOnInit(): void {

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
            c.filterAdded.subscribe(f => {
                this.filters.push(f);
                this.modalService.hide();
            });
        });
    }
}
