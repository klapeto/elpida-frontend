import {Component, Input} from '@angular/core';
import {ValueFilter} from '../../models/value-filter';

@Component({
  selector: 'app-string-filter',
  templateUrl: './string-filter.component.html',
  styleUrls: ['./string-filter.component.css']
})
export class StringFilterComponent {

  @Input() filter: ValueFilter<string>;

  constructor() {
  }
}
