import {Component, Input} from '@angular/core';
import {FilterComponent} from '../filter-component';
import {NumberFilterModel} from '../../../../models/filters/number-filter.model';

@Component({
    selector: 'app-number-filter',
    templateUrl: './number-filter.component.html',
    styleUrls: ['./number-filter.component.css']
})
export class NumberFilterComponent extends FilterComponent<NumberFilterModel> {

    @Input()
    public filter: NumberFilterModel;

    @Input()
    public allowComparison: boolean;

    public constructor() {
        super();
    }
}
