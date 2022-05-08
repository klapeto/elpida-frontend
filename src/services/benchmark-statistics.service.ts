import {ComponentFactoryResolver, Injectable, ViewContainerRef} from '@angular/core';
import {CollectionService} from './collection-service';
import {HttpClient} from '@angular/common/http';
import {BenchmarkStatisticsPreview} from '../models/benchmark-statistics/benchmark-statistics-preview';
import {BenchmarkStatistics} from '../models/benchmark-statistics/benchmark-statistics';
import {FilterModel} from '../models/filter.model';
import {StringFilterModel} from '../models/filters/string-filter.model';
import {CpuService} from './cpu.service';
import {BenchmarkStatisticItemComponent} from '../components/collection/items/benchmark-statistic-item/benchmark-statistic-item.component';
import {QueryModel} from '../models/query.model';
import {NumberFilterModel} from '../models/filters/number-filter.model';
import {DtoService} from './dto.service';

@Injectable({
    providedIn: 'root'
})
export class BenchmarkStatisticsService extends CollectionService<BenchmarkStatistics, BenchmarkStatisticsPreview> {

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

    public createCollectionItemComponent(item: BenchmarkStatisticsPreview, componentFactoryResolver: ComponentFactoryResolver, viewContainerRef: ViewContainerRef): any {
        const component = viewContainerRef.createComponent<BenchmarkStatisticItemComponent>(
            componentFactoryResolver.resolveComponentFactory<BenchmarkStatisticItemComponent>(BenchmarkStatisticItemComponent)
        );

        component.instance.item = item;
        return component;
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

    createAdvancedQuery(): QueryModel {
        return undefined;
    }

    createSimpleQuery(): QueryModel {
        return undefined;
    }
}
