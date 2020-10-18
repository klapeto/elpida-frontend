import {Component, Input} from '@angular/core';
import {OptionFilter} from '../../models/filters/option-filter';
import {ValueFilter} from '../../models/value-filter';

@Component({
  selector: 'app-option-simple-filter',
  templateUrl: './option-filter.component.html',
  styleUrls: ['./option-filter.component.css']
})
export class OptionFilterComponent {

  @Input() filter: ValueFilter<string>;
  @Input() options: string[];

  constructor() {
  }

}
