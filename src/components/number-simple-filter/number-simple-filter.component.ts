import {Component, Input, OnInit} from '@angular/core';
import {SimpleFilter} from '../../models/simple-filter';
import {ValueConverter} from '../../services/value-converter';

@Component({
    selector: 'app-number-simple-filter',
    templateUrl: './number-simple-filter.component.html',
    styleUrls: ['./number-simple-filter.component.css']
})
export class NumberSimpleFilterComponent implements OnInit {

    @Input() filter: SimpleFilter;
    @Input() max: number;
    @Input() min: number;
    @Input() suffix: string;

    constructor(public valueConverter: ValueConverter) {
    }

    ngOnInit(): void {
    }

    public getDecimals(): number {
        return this.filter.value < 1000 ? 0 : 2;
    }
}
