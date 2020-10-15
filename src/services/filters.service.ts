import {Injectable} from '@angular/core';
import {Filter} from '../models/filter';
import {FilterType} from '../models/filter-type.enum';
import {FilterDto} from './filter-dto';
import {FilterFactory} from '../models/filter-factory';

@Injectable({
    providedIn: 'root'
})
export class FiltersService {

    public readonly filterFactories: FilterFactory[];

    public readonly searchFilterFactory: FilterFactory;

    public readonly orderByFilterFactories: FilterFactory[];

    public readonly defaultOrderByFilter: FilterFactory;

    public translateToDtos(filters: Filter[]): object {
        const returnObject = {};
        filters.forEach(x => {
            if (x.selected !== '' && x.value !== undefined && x.value !== '' && x.value !== null) {
                if (x.factory.type === FilterType.Date) {
                    returnObject[x.factory.name] = new FilterDto(
                        new Date(x.value).toISOString(),
                        Filter.uiComparisonToBackendComparison[x.selected]
                    );
                } else if (x.factory.type === FilterType.Number) {
                    const val = Number.parseInt(x.value, 10);
                    if (isNaN(val) || val < 0) {
                        throw new Error(x.value + ' was not a valid number');
                    }
                    returnObject[x.factory.name] = new FilterDto(
                        Number.parseInt(x.value, 10),
                        Filter.uiComparisonToBackendComparison[x.selected]);
                } else {
                    returnObject[x.factory.name] = new FilterDto(x.value, Filter.uiComparisonToBackendComparison[x.selected]);
                }
            }
        });
        return returnObject;
    }

    constructor() {
        this.orderByFilterFactories = [
            new FilterFactory('Benchmark Name', 'name', FilterType.String),
            new FilterFactory('CPU Vendor', 'cpuVendor', FilterType.String),
            new FilterFactory('CPU Brand', 'cpuBrand', FilterType.String),
            new FilterFactory('CPU Frequency', 'cpuFrequency', FilterType.Number),
            new FilterFactory('CPU Cores', 'cpuCores', FilterType.Number),
            new FilterFactory('CPU Logical Cores', 'cpuLogicalCores', FilterType.Number),
            new FilterFactory('Main Memory Size', 'memorySize', FilterType.Number),
            new FilterFactory('Os Category', 'osCategory', FilterType.String),
            new FilterFactory('Os Name', 'osName', FilterType.String),
            new FilterFactory('Os Version', 'osVersion', FilterType.String),
        ];

        this.searchFilterFactory = this.orderByFilterFactories[0];
        this.filterFactories = this.orderByFilterFactories.slice(1);
        this.filterFactories.push(
            new FilterFactory('From', 'startTime', FilterType.Date, false),
            new FilterFactory('To', 'endTime', FilterType.Date, false)
        );
        this.defaultOrderByFilter = new FilterFactory('Timestamp', 'timestamp', FilterType.Date, false);
        this.orderByFilterFactories.push(this.defaultOrderByFilter);
    }
}
