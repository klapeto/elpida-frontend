import {Injectable} from '@angular/core';
import {Filter} from '../models/filter';
import {FilterType} from '../models/filter-type.enum';
import {FilterDto} from './filter-dto';
import {Query} from '../models/query';

@Injectable({
    providedIn: 'root'
})
export class FiltersService {

    public filters: Filter[];

    public orderByFilters: Filter[];

    public defaultOrderByFilter: Filter;

    public query: Query;

    public translateToDtos(filters: Filter[]): object {
        const returnObject = {};
        filters.forEach(x => {
            if (x.selected !== '' && x.value !== undefined && x.value !== '' && x.value !== null) {
                if (x.type === FilterType.Date) {
                    returnObject[x.name] = new FilterDto(new Date(x.value).toISOString(), Filter.uiComparisonToBackendComparison[x.selected]);
                } else if (x.type === FilterType.Number) {
                    const val = Number.parseInt(x.value, 10);
                    if (isNaN(val)) {
                        throw new Error(x.value + ' was not a valid number');
                    }
                    returnObject[x.name] = new FilterDto(Number.parseInt(x.value, 10), Filter.uiComparisonToBackendComparison[x.selected]);
                } else {
                    returnObject[x.name] = new FilterDto(x.value, Filter.uiComparisonToBackendComparison[x.selected]);
                }
            }
        });
        return returnObject;
    }

    constructor() {
        this.orderByFilters = [
            new Filter('Benchmark Name', 'name', FilterType.String),
            new Filter('CPU Vendor', 'cpuVendor', FilterType.String),
            new Filter('CPU Brand', 'cpuBrand', FilterType.String),
            new Filter('CPU Frequency', 'cpuFrequency', FilterType.Number),
            new Filter('CPU Cores', 'cpuCores', FilterType.Number),
            new Filter('CPU Logical Cores', 'cpuLogicalCores', FilterType.Number),
            new Filter('Main Memory Size', 'memorySize', FilterType.Number),
            new Filter('Os Category', 'osCategory', FilterType.String),
            new Filter('Os Name', 'osName', FilterType.String),
            new Filter('Os Version', 'osVersion', FilterType.String),
        ];

        this.filters = this.orderByFilters.slice();
        this.filters.push(
            new Filter('From', 'startTime', FilterType.Date, false),
            new Filter('To', 'endTime', FilterType.Date, false)
        );
        this.defaultOrderByFilter = new Filter('Timestamp', 'timestamp', FilterType.Date, false);
        this.orderByFilters.push(this.defaultOrderByFilter);

        this.query = new Query(this.filters, this.defaultOrderByFilter, true);
    }
}
