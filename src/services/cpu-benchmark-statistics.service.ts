import {BenchmarkStatisticsService} from './benchmark-statistics.service';
import {Filter} from '../models/filter';
import {HttpClient} from '@angular/common/http';
import {CpuService} from './cpu.service';
import {StringFilter} from '../models/filters/string-filter';

export class CpuBenchmarkStatisticsService extends BenchmarkStatisticsService {

    constructor(http: HttpClient, cpuService: CpuService) {
        super(http, cpuService);
    }

    createOrderByFilters(): Filter[] {
        return [
            new StringFilter('Benchmark name', 'benchmarkName', true)
        ];
    }

    createAdvancedFilters(): Filter[] {
        return [
            new StringFilter('Benchmark name', 'benchmarkName', true)
        ];
    }

    createSimpleFilters(): Filter[] {
        return this.createAdvancedFilters();
    }
}
