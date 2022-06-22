import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FilterModel} from '../../../../models/filter.model';

@Component({
    selector: 'app-new-filter',
    templateUrl: './new-filter.component.html',
    styleUrls: ['./new-filter.component.css']
})
export class NewFilterComponent {

    @Input()
    public availableFilters: FilterModel[];

    @Output()
    public filterAdded: EventEmitter<FilterModel> = new EventEmitter<FilterModel>();

    public selectedFilter: FilterModel;

    public onSelectionChange(event: any): void {
        this.selectedFilter = this.availableFilters.find(f => f.title === event.target.value);
    }

    public onAddClick(): void {
        this.filterAdded.emit(this.selectedFilter);
    }
}
