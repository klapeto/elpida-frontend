import {Injectable} from '@angular/core';
import {Filter} from '../models/filter';
import {StringFilter} from '../models/filters/string-filter';
import {NumberComparisons, NumberFilter} from '../models/filters/number-filter';
import {DateComparisons, DateFilter} from '../models/filters/date-filter';
import {OptionFilter, OptionFilterMap} from '../models/filters/option-filter';
import {RangeFilter} from '../models/filters/range-filter';

@Injectable({
    providedIn: 'root'
})
export class FiltersService {

    private cpuDictionary: OptionFilterMap = {
        'AMD Ryzen 3': 'AMD Ryzen 3',
        'AMD Ryzen 5': 'AMD Ryzen 5',
        'AMD Ryzen 7': 'AMD Ryzen 7',
        'AMD Ryzen 9': 'AMD Ryzen 9',
        'AMD Ryzen Threadripper': 'AMD Ryzen Threadripper',
        'AMD Epyc': 'AMD Epyc',
        'Intel Celeron': 'Intel(R) Celeron',
        'Intel Pentium': 'Intel(R) Pentium',
        'Intel Core i3': 'Intel(R) Core(TM) i3',
        'Intel Core i5': 'Intel(R) Core(TM) i5',
        'Intel Core i7': 'Intel(R) Core(TM) i7',
        'Intel Core i9': 'Intel(R) Core(TM) i9',
        'Intel Xeon': 'Intel(R) Xeon(TM)'
    };

    private oses = [
        'Windows',
        'Linux'
    ];

    public createSimpleFilters(): Filter[] {
        return [
            new OptionFilter('CPU Brand', 'cpuBrand', Object.keys(this.cpuDictionary), this.cpuDictionary),
            new RangeFilter('Min CPU Frequency',
                'cpuFrequency', false,
                NumberComparisons.GreaterEqual,
                'HZ',
                500_000_000,
                10_000_000_000,
                undefined,
                2_500_000_000),
            new RangeFilter('Min CPU Cores',
                'cpuCores',
                false,
                NumberComparisons.GreaterEqual,
                undefined,
                1, 128,
                undefined,
                4),
            new OptionFilter('Os', 'osCategory', this.oses),
        ];
    }

    public createAdvancedFilters(): Filter[] {
        return [
            new StringFilter('Benchmark Name', 'name', true),
            new StringFilter('CPU Vendor', 'cpuVendor', true),
            new StringFilter('CPU Brand', 'cpuBrand', true),
            new NumberFilter('CPU Frequency', 'cpuFrequency', true),
            new NumberFilter('CPU Cores', 'cpuCores', true),
            new NumberFilter('CPU Logical Cores', 'cpuLogicalCores', true),
            new NumberFilter('Main Memory Size', 'memorySize', true),
            new StringFilter('Os Category', 'osCategory', true),
            new StringFilter('Os Name', 'osName', true),
            new StringFilter('Os Version', 'osVersion', true),
            new DateFilter('From', 'startTime', false, DateComparisons.GreaterEqual),
            new DateFilter('To', 'endTime', false, DateComparisons.LessEqual)
        ];
    }

    public createOrderByFilters(): Filter[] {
        return [
            new StringFilter('Benchmark Name', 'name', true),
            new StringFilter('CPU Vendor', 'cpuVendor', true),
            new StringFilter('CPU Brand', 'cpuBrand', true),
            new NumberFilter('CPU Frequency', 'cpuFrequency', true),
            new NumberFilter('CPU Cores', 'cpuCores', true),
            new NumberFilter('CPU Logical Cores', 'cpuLogicalCores', true),
            new NumberFilter('Main Memory Size', 'memorySize', true),
            new NumberFilter('Os Category', 'osCategory', true),
            new NumberFilter('Os Name', 'osName', true),
            new NumberFilter('Os Version', 'osVersion', true),
            new DateFilter('Timestamp', 'timestamp', false),
        ];
    }

    public createSearchFilter(): StringFilter {
        return new StringFilter('Benchmark Name', 'name', true);
    }

    public createDefaultOrderByFilter(): Filter {
        return new DateFilter('Timestamp', 'timestamp', false);
    }
}
