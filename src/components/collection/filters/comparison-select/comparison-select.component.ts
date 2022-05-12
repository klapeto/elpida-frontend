import {Component, Input, OnInit} from '@angular/core';
import {ValueFilterModel} from '../../../../models/value-filter.model';

@Component({
    selector: 'app-comparison-select',
    templateUrl: './comparison-select.component.html',
    styleUrls: ['./comparison-select.component.css']
})
export class ComparisonSelectComponent implements OnInit {

    @Input() filter: ValueFilterModel<any>;

    set selectedComparison(s: string) {
        this.filter.comparison = this.filter.allowedComparisons.find(f => f.displayName === s);
        this._selectedComparison = s;
    }

    get selectedComparison() {
        return this._selectedComparison;
    }

    private _selectedComparison: string;

    constructor() {
    }

    ngOnInit(): void {
      this._selectedComparison = this.filter.comparison?.displayName ?? null;
    }

}
