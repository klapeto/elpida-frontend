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

    @Input()
    public availableFilters: FilterModel[];

    @Output()
    public submitted: EventEmitter<QueryModel> = new EventEmitter<QueryModel>();

    public filters: FilterModel[] = [];

    // This is needed because for some reason angular reverts the selection to ui after change
    public _availableFilters: FilterModel[];

    public orderBy?: string = null;

    public descending: boolean;

    public constructor(private modalService: ModalService) {
    }

    public ngOnInit(): void {
        this._availableFilters = this.availableFilters.map(f => f.clone());
    }

    public onCloseClick(filter: FilterModel): void {
        this.filters = this.filters.filter(f => f !== filter);
    }

    public onSearchClick(): void {
        this.submitted.emit(new QueryModel(this.filters, this.orderBy, this.descending));
    }

    public onAddClick(): void {
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
