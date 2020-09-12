import {Component, Input, OnInit} from '@angular/core';
import {Filter} from '../../../../models/filter';
import {FilterType} from '../../../../models/filter-type.enum';

@Component({
    selector: 'app-filter-case',
    templateUrl: './filter-case.component.html',
    styleUrls: ['./filter-case.component.css']
})
export class FilterCaseComponent implements OnInit {

    @Input() public filter: Filter;

    constructor() {
    }

    public getInputType(): string {
        switch (this.filter.type) {
            case FilterType.String:
                return 'Text';
            case FilterType.Number:
                return 'number';
            case FilterType.Date:
                return 'date';
        }
    }

    ngOnInit() {
    }

}
