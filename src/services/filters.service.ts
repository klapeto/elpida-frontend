import {Injectable} from '@angular/core';
import {Filter} from '../models/filter';
import {FilterType} from '../models/filter-type.enum';
import {FilterDto} from './filter-dto';

@Injectable({
  providedIn: 'root'
})
export class FiltersService {

  public filters: Filter[];

  public translateToDtos(filters: Filter[]): object {
    const returnObject = {};
    filters.forEach(x => {
      if (x.selected !== '' && x.value !== undefined) {
        if (x.type === FilterType.Date)
        {
          returnObject[x.name] = new FilterDto(new Date(x.value).toISOString(), Filter.uiComparisonToBackendComparison[x.selected]);
        } else {
          returnObject[x.name] = new FilterDto(x.value, Filter.uiComparisonToBackendComparison[x.selected]);
        }

      }
    });
    return returnObject;
  }

  constructor() {
    this.filters = [
      new Filter('Benchmark Name', 'name', FilterType.String),
      new Filter('From', 'startTime', FilterType.Date, false),
      new Filter('To', 'endTime', FilterType.Date, false),
    ];
  }
}
