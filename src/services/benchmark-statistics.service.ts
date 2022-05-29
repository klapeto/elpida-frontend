import {Injectable} from '@angular/core';
import {CollectionService} from './collection-service';
import {HttpClient} from '@angular/common/http';
import {BenchmarkStatisticsPreviewModel} from '../models/benchmark-statistics/benchmark-statistics-preview.model';
import {BenchmarkStatisticsModel} from '../models/benchmark-statistics/benchmark-statistics.model';
import {FilterModel} from '../models/filter.model';
import {StringFilterModel} from '../models/filters/string-filter.model';
import {CpuService} from './cpu.service';
import {QueryModel} from '../models/query.model';
import {NumberFilterModel} from '../models/filters/number-filter.model';
import {DtoService} from './dto.service';

@Injectable({
    providedIn: 'root'
})
export class BenchmarkStatisticsService extends CollectionService<BenchmarkStatisticsModel, BenchmarkStatisticsPreviewModel> {

    public constructor(http: HttpClient, private readonly cpuService: CpuService, dtoService: DtoService) {
        super(http, dtoService);
    }

    protected readonly baseRoute: string = 'BenchmarkStatistics';

    public createAdvancedFilters(): FilterModel[] {
        return this.cpuService.createAdvancedQuery()
            .filters
            .concat([
                this.createBenchmarkScoreMeanFilter(),
            ]);
    }

    public createDefaultQuery(): QueryModel {
        return new QueryModel([], undefined, false);
    }

    // public createOrderByFilters(): Filter[] {
    //     return this.cpuService.createOrderByFilters()
    //         .concat([
    //             this.createBenchmarkScoreMeanFilter(),
    //         ]);
    // }

    public createSearchFilter(): StringFilterModel {
        return this.cpuService.createSearchFilter();
    }

    // public createSimpleFilters(): Filter[] {
    //     return this.cpuService.createSimpleFilters()
    //         .concat([
    //             this.createBenchmarkScoreMeanFilter(),
    //         ]);
    // }

    public createBenchmarkScoreMeanFilter() {
        return new NumberFilterModel('Benchmark score mean', 'benchmarkScoreMean');
    }

    public createAdvancedQuery(): QueryModel {
        return undefined;
    }

    public createSimpleQuery(): QueryModel {
        return undefined;
    }
}
