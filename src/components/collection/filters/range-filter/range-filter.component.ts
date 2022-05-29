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

    @Input() public filter: ValueFilterModel<number>;

    @Input() public suffix: string;
    @Input() public min: number;
    @Input() public max: number;
    @Input() public step: number;

    @Input() public allowComparison: boolean;

    constructor(public valueConverter: ValueConverter) {
        super();
    }

    public getDecimals(): number {
        return this.filter.value < 1000 ? 0 : 2;
    }
}
