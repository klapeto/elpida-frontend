import {Component, Input} from '@angular/core';
import {ValueFilter} from '../../models/value-filter';

@Component({
    selector: 'app-date-filter',
    templateUrl: './date-filter.component.html',
    styleUrls: ['./date-filter.component.css']
})
export class DateFilterComponent {

    @Input() filter: ValueFilter<Date>;

    constructor() {
    }
}
