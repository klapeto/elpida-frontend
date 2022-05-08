import {Component, Input} from '@angular/core';
import {OptionFilterModel} from '../../../../models/filters/option-filter.model';

@Component({
  selector: 'app-option-simple-filter',
  templateUrl: './option-filter.component.html',
  styleUrls: ['./option-filter.component.css']
})
export class OptionFilterComponent {

  @Input() filter: OptionFilterModel;
  @Input() allowComparison: boolean;

  constructor() {
  }
}
