import {Component, Input} from '@angular/core';
import {ValueConverter} from '../../../../services/value-converter';
import {FilterComponent} from '../filter-component';
import {RangeFilterModel} from '../../../../models/filters/range-filter.model';

@Component({
    selector: 'app-number-simple-filter',
    templateUrl: './range-filter.component.html',
    styleUrls: ['./range-filter.component.css']
})
export class RangeFilterComponent extends FilterComponent<RangeFilterModel> {

    @Input()
    public filter: RangeFilterModel;

    @Input()
    public suffix: string;

    @Input()
    public min: number;

    @Input()
    public max: number;

    @Input()
    public step: number;

    @Input()
    public allowComparison: boolean;

    public constructor(public readonly valueConverter: ValueConverter) {
        super();
    }

    public getDecimals(): number {
        return this.filter.value < 1000 ? 0 : 2;
    }
}
