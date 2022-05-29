import {Component, Input} from '@angular/core';
import {OptionFilterModel} from '../../../../models/filters/option-filter.model';

@Component({
    selector: 'app-option-simple-filter',
    templateUrl: './option-filter.component.html',
    styleUrls: ['./option-filter.component.css']
})
export class OptionFilterComponent {

    @Input() public filter: OptionFilterModel;
    @Input() public allowComparison: boolean;

    public constructor() {
    }
}
