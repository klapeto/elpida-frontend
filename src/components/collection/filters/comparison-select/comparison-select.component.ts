import {Component, Input, OnInit} from '@angular/core';
import {ValueFilterModel} from '../../../../models/value-filter.model';

@Component({
    selector: 'app-comparison-select',
    templateUrl: './comparison-select.component.html',
    styleUrls: ['./comparison-select.component.css']
})
export class ComparisonSelectComponent implements OnInit {

    @Input() public filter: ValueFilterModel<any>;

    private _selectedComparison: string;

    public constructor() {
    }

    public set selectedComparison(s: string) {
        this.filter.comparison = this.filter.allowedComparisons.find(f => f.displayName === s);
        this._selectedComparison = s;
    }

    public get selectedComparison(): string {
        return this._selectedComparison;
    }

    public ngOnInit(): void {
        this._selectedComparison = this.filter.comparison?.displayName ?? null;
    }

}
