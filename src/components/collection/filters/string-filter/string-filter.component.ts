import {Component, Input} from '@angular/core';
import {ValueFilterModel} from '../../../../models/value-filter.model';
import {FilterComponent} from '../filter-component';

@Component({
    selector: 'app-string-filter',
    templateUrl: './string-filter.component.html',
    styleUrls: ['./string-filter.component.css']
})
export class StringFilterComponent extends FilterComponent<string> {

    @Input() public filter: ValueFilterModel<string>;
    @Input() public allowComparison: boolean;

    constructor() {
        super();
    }
}
