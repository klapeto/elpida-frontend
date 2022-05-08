import {Component, Input} from '@angular/core';
import {ValueFilterModel} from '../../../../models/value-filter.model';
import {FilterComponent} from '../filter-component';

@Component({
    selector: 'app-number-filter',
    templateUrl: './number-filter.component.html',
    styleUrls: ['./number-filter.component.css']
})
export class NumberFilterComponent extends FilterComponent<number> {

    @Input() filter: ValueFilterModel<number>;
    @Input() allowComparison: boolean;

    constructor() {
        super();
    }
}
