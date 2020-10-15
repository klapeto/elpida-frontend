import {Injectable} from '@angular/core';
import {SimpleFilter} from '../models/simple-filter';
import {NumberSimpleFilter} from '../models/simple-filters/number-simple-filter';
import {OptionSimpleFilter} from '../models/simple-filters/option-simple-filter';

@Injectable({
  providedIn: 'root'
})
export class SimpleFiltersService {

  public filters: SimpleFilter[] = [
    new NumberSimpleFilter('WTF', 5, 10000, 0, 'p'),
    new OptionSimpleFilter('Crap', ['shit', 'damn'])
  ];

  constructor() {
  }
}
