import {Injectable} from '@angular/core';
import {TaskStatisticsService} from './task-statistics.service';
import {Filter} from '../models/filter';
import {HttpClient} from '@angular/common/http';
import {CpuService} from './cpu.service';
import {NumberComparisons, NumberFilter} from '../models/filters/number-filter';

// @Injectable({
//     providedIn: 'root'
// })
export class CpuTaskStatisticsService extends TaskStatisticsService {

    constructor( http: HttpClient, cpuService: CpuService) {
        super(http, cpuService);
    }

    createOrderByFilters(): Filter[] {
        return [];
    }

    createAdvancedFilters(): Filter[] {
        return [];
    }

    createDefaultOrderByFilter(): Filter {
        return undefined;
    }

    createSimpleFilters(): Filter[] {
        return [];
    }
}
