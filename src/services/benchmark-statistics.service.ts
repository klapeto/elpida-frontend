import {ComponentFactoryResolver, Injectable, ViewContainerRef} from '@angular/core';
import {CollectionService} from './collection-service';
import {HttpClient} from '@angular/common/http';
import {BenchmarkStatisticsPreview} from '../models/benchmark-statistics/benchmark-statistics-preview';
import {BenchmarkStatistics} from '../models/benchmark-statistics/benchmark-statistics';
import {Filter} from '../models/filter';
import {StringComparisons, StringFilter} from '../models/filters/string-filter';
import {CpuService} from './cpu.service';
import {BenchmarkStatisticItemComponent} from '../components/collection/items/benchmark-statistic-item/benchmark-statistic-item.component';
import {Query} from '../models/query';

@Injectable({
    providedIn: 'root'
})
export class BenchmarkStatisticsService extends CollectionService<BenchmarkStatistics, BenchmarkStatisticsPreview> {

    public constructor(http: HttpClient, private readonly cpuService: CpuService) {
        super(http);
    }

    protected readonly baseRoute: string = 'BenchmarkStatistics';

    public createAdvancedFilters(): Filter[] {
        return this.cpuService.createAdvancedFilters();
    }

    public createCollectionItemComponent(item: BenchmarkStatisticsPreview, componentFactoryResolver: ComponentFactoryResolver, viewContainerRef: ViewContainerRef): any {
        const component = viewContainerRef.createComponent<BenchmarkStatisticItemComponent>(
            componentFactoryResolver.resolveComponentFactory<BenchmarkStatisticItemComponent>(BenchmarkStatisticItemComponent)
        );

        component.instance.item = item;
        return component;
    }

    public createDefaultQuery(): Query {
        return new Query([], undefined, false);
    }

    public createOrderByFilters(): Filter[] {
        return this.cpuService.createOrderByFilters();
    }

    public createSearchFilter(): StringFilter {
        return this.cpuService.createSearchFilter();
    }

    public createSimpleFilters(): Filter[] {
        return this.cpuService.createSimpleFilters();
    }
}
