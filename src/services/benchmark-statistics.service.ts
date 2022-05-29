import {Injectable} from '@angular/core';
import {CollectionService} from './collection-service';
import {HttpClient} from '@angular/common/http';
import {BenchmarkStatisticsPreviewModel} from '../models/benchmark-statistics/benchmark-statistics-preview.model';
import {BenchmarkStatisticsModel} from '../models/benchmark-statistics/benchmark-statistics.model';
import {StringFilterModel} from '../models/filters/string-filter.model';
import {CpuService} from './cpu.service';
import {QueryModel} from '../models/query.model';
import {NumberFilterModel} from '../models/filters/number-filter.model';
import {DtoService} from './dto.service';

@Injectable({
    providedIn: 'root'
})
export class BenchmarkStatisticsService extends CollectionService<BenchmarkStatisticsModel, BenchmarkStatisticsPreviewModel> {

    protected readonly baseRoute: string = 'BenchmarkStatistics';

    public constructor(http: HttpClient, private readonly cpuService: CpuService, dtoService: DtoService) {
        super(http, dtoService);
    }

    public createSearchFilter(): StringFilterModel {
        return this.cpuService.createSearchFilter();
    }

    public createBenchmarkScoreMeanFilter(): NumberFilterModel {
        return new NumberFilterModel('Benchmark score mean', 'benchmarkScoreMean');
    }

    public createAdvancedQuery(): QueryModel {
        return new QueryModel(this.cpuService.createAdvancedQuery()
            .filters
            .concat([
                this.createBenchmarkScoreMeanFilter(),
            ]));
    }

    public createSimpleQuery(): QueryModel {
        return new QueryModel(this.cpuService.createSimpleQuery()
            .filters
            .concat([
                this.createBenchmarkScoreMeanFilter(),
            ]));
    }
}
