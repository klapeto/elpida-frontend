import {Component, Input} from '@angular/core';
import {ValueConverter} from '../../services/value-converter';
import {ValueFilter} from '../../models/value-filter';

@Component({
    selector: 'app-number-simple-filter',
    templateUrl: './range-filter.component.html',
    styleUrls: ['./range-filter.component.css']
})
export class RangeFilterComponent {

    @Input() filter: ValueFilter<number>;

    @Input() suffix: string;
    @Input() min: number;
    @Input() max: number;
    @Input() step: number;

    constructor(public valueConverter: ValueConverter) {
    }

    public getDecimals(): number {
        return this.filter.value < 1000 ? 0 : 2;
    }
}
