import {Component, Input} from '@angular/core';
import {FilterComponent} from '../filter-component';
import {DateFilterModel} from '../../../../models/filters/date-filter.model';

@Component({
    selector: 'app-date-filter',
    templateUrl: './date-filter.component.html',
    styleUrls: ['./date-filter.component.css']
})
export class DateFilterComponent extends FilterComponent<DateFilterModel> {
    @Input()
    public filter: DateFilterModel;

    @Input()
    public allowComparison: boolean;

    public constructor() {
        super();
    }
}
