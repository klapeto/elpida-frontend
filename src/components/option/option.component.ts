import {Component, Input} from '@angular/core';
import {OptionModel} from '../../models/option.model';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-option',
    templateUrl: './option.component.html',
    styleUrls: ['./option.component.css']
})
export class OptionComponent {

    @Input() public displayName: string;
    @Input() public options: OptionModel[];
    @Input() public selectedOption: Observable<string>;

    public constructor() {
    }
}
