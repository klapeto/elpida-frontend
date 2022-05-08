import {Component, Input} from '@angular/core';
import {ValueConverter} from '../../../../services/value-converter';
import {ValueFilterModel} from '../../../../models/value-filter.model';
import {FilterComponent} from '../filter-component';

@Component({
    selector: 'app-number-simple-filter',
    templateUrl: './range-filter.component.html',
    styleUrls: ['./range-filter.component.css']
})
export class RangeFilterComponent extends FilterComponent<number> {

    @Input() filter: ValueFilterModel<number>;

    @Input() suffix: string;
    @Input() min: number;
    @Input() max: number;
    @Input() step: number;

    @Input() allowComparison: boolean;

    constructor(public valueConverter: ValueConverter) {
        super();
    }

    public getDecimals(): number {
        return this.filter.value < 1000 ? 0 : 2;
    }
}
