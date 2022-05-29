import {BenchmarkStatisticsService} from './benchmark-statistics.service';
import {FilterModel} from '../models/filter.model';
import {HttpClient} from '@angular/common/http';
import {CpuService} from './cpu.service';
import {StringFilterModel} from '../models/filters/string-filter.model';
import {DtoService} from './dto.service';

export class CpuBenchmarkStatisticsService extends BenchmarkStatisticsService {

    public constructor(http: HttpClient, cpuService: CpuService, dtoService: DtoService) {
        super(http, cpuService, dtoService);
    }

    public createOrderByFilters(): FilterModel[] {
        return [
            new StringFilterModel('Benchmark name', 'benchmarkName')
        ];
    }

    public createAdvancedFilters(): FilterModel[] {
        return [
            new StringFilterModel('Benchmark name', 'benchmarkName')
        ];
    }

    public createSimpleFilters(): FilterModel[] {
        return this.createAdvancedFilters();
    }
}
