import {Component, Input} from '@angular/core';
import {FilterComponent} from '../filter-component';
import {StringFilterModel} from '../../../../models/filters/string-filter.model';

@Component({
    selector: 'app-string-filter',
    templateUrl: './string-filter.component.html',
    styleUrls: ['./string-filter.component.css']
})
export class StringFilterComponent extends FilterComponent<StringFilterModel> {

    @Input() public filter: StringFilterModel;
    @Input() public allowComparison: boolean;

    public constructor() {
        super();
    }
}
