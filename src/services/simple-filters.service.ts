import {Injectable} from '@angular/core';
import {SimpleFilter} from '../models/simple-filter';
import {NumberSimpleFilter} from '../models/simple-filters/number-simple-filter';
import {OptionSimpleFilter} from '../models/simple-filters/option-simple-filter';

@Injectable({
    providedIn: 'root'
})
export class SimpleFiltersService {

    private cpuDictionary = {
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

    public filters: SimpleFilter[] = [
        new OptionSimpleFilter('CPU Brand', Object.keys(this.cpuDictionary)),
        new NumberSimpleFilter('Min CPU Frequency', 3_500_000_000, 10_000_000_000, 500_000_000, 'HZ'),
        new NumberSimpleFilter('Min CPU Cores', 4, 256, 1),
        new OptionSimpleFilter('Os', this.oses),
    ];


    constructor() {
    }
}
