import {Component, Input, OnInit} from '@angular/core';
import {OptionModel} from '../../models/option.model';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-option',
    templateUrl: './option.component.html',
    styleUrls: ['./option.component.css']
})
export class OptionComponent implements OnInit {

    @Input() displayName: string;
    @Input() options: OptionModel[];
    @Input() selectedOption: Observable<string>;

    constructor() {
    }

    ngOnInit(): void {
    }

}
