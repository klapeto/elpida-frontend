import {Component, Input, OnInit} from '@angular/core';
import {OptionSimpleFilter} from '../../models/simple-filters/option-simple-filter';
import {SimpleFilter} from '../../models/simple-filter';

@Component({
  selector: 'app-option-simple-filter',
  templateUrl: './option-simple-filter.component.html',
  styleUrls: ['./option-simple-filter.component.css']
})
export class OptionSimpleFilterComponent implements OnInit {

  @Input() options: string[];
  @Input() filter: SimpleFilter;

  constructor() { }

  ngOnInit(): void {
  }

}
