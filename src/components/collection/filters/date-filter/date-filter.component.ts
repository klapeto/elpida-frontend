import {Component, Input} from '@angular/core';
import {ValueFilterModel} from '../../../../models/value-filter.model';
import {FilterComponent} from '../filter-component';

@Component({
    selector: 'app-date-filter',
    templateUrl: './date-filter.component.html',
    styleUrls: ['./date-filter.component.css']
})
export class DateFilterComponent extends FilterComponent<Date> {
    @Input() public filter: ValueFilterModel<Date>;
    @Input() public allowComparison: boolean;

    constructor() {
        super();
    }
}
