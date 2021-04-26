import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Query} from '../../../../models/query';
import {Filter} from '../../../../models/filter';
import {CollectionService} from '../../../../services/collection-service';

@Component({
    selector: 'app-simple-filters',
    templateUrl: './simple-filters.component.html',
    styleUrls: ['./simple-filters.component.css']
})
export class SimpleFiltersComponent implements OnInit {

    public filters: Filter[];

    @Input() service: CollectionService<any, any>;
    @Output() public readonly submitted = new EventEmitter<Query>();

    ngOnInit(): void {
        this.filters = this.service.createSimpleFilters();
    }


    public onSubmit() {
        this.submitted.emit(new Query(this.filters, this.service.createDefaultOrderByFilter(), true));
    }
}
