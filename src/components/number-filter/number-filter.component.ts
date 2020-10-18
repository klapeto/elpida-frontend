import {Component, Input} from '@angular/core';
import {NumberFilter} from '../../models/filters/number-filter';
import {ValueFilter} from '../../models/value-filter';

@Component({
    selector: 'app-number-filter',
    templateUrl: './number-filter.component.html',
    styleUrls: ['./number-filter.component.css']
})
export class NumberFilterComponent {

    @Input() filter: ValueFilter<number>;

    constructor() {
    }
}
