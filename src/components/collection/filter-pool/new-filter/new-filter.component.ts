import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FilterModel} from '../../../../models/filter.model';

@Component({
    selector: 'app-new-filter',
    templateUrl: './new-filter.component.html',
    styleUrls: ['./new-filter.component.css']
})
export class NewFilterComponent implements OnInit {

    @Input() availableFilters: FilterModel[];
    @Output() filterAdded: EventEmitter<FilterModel> = new EventEmitter<FilterModel>();

    selectedFilter: FilterModel;

    constructor() {
    }

    ngOnInit(): void {

    }

    onSelectionChange(event: any) {
        this.selectedFilter = this.availableFilters.find(f => f.title === event.target.value);
    }

    onAddClick(): void {
        this.filterAdded.emit(this.selectedFilter);
    }

}
