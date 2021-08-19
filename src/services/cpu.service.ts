import {ComponentFactoryResolver, Injectable, ViewContainerRef} from '@angular/core';
import {CpuPreview} from '../models/cpu/cpu-preview';
import {Cpu} from '../models/cpu/cpu';
import {CollectionService} from './collection-service';
import {Filter} from '../models/filter';
import {StringFilter} from '../models/filters/string-filter';
import {OptionFilter, OptionFilterMap} from '../models/filters/option-filter';
import {RangeFilter} from '../models/filters/range-filter';
import {NumberComparisons, NumberFilter} from '../models/filters/number-filter';
import {HttpClient} from '@angular/common/http';
import {CpuItemComponent} from '../components/collection/items/cpu-item/cpu-item.component';
import {PageRequest} from '../models/page-request';
import {Query} from '../models/query';
import {Observable} from 'rxjs';
import {PagedResult} from '../models/paged-result';
import {QueryRequest} from '../models/query-request';
import {BenchmarkStatisticsPreview} from '../models/benchmark-statistics/benchmark-statistics-preview';

@Injectable({
    providedIn: 'root'
})
export class CpuService extends CollectionService<Cpu, CpuPreview> {

    public constructor(http: HttpClient) {
        super(http);
    }

    protected readonly baseRoute: string = 'cpu';

    protected readonly statisticsRoute = 'TaskStatistics/Search';

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

    createAdvancedFilters(): Filter[] {
        return [
            new StringFilter('CPU Vendor', 'cpuVendor', true),
            new StringFilter('CPU Brand', 'cpuModelName', true),
            new NumberFilter('CPU Frequency', 'cpuFrequency', true)
        ];
    }

    createDefaultQuery(): Query {
        return new Query([], new StringFilter('CPU Brand', 'cpuModelName', true), false);
    }

    createOrderByFilters(): Filter[] {
        return this.createAdvancedFilters();
    }

    createSearchFilter(): StringFilter {
        return new StringFilter('CPU Brand', 'cpuModelName', true);
    }

    createSimpleFilters(): Filter[] {
        return [
            new OptionFilter('CPU Brand', 'cpuModelName', Object.keys(this.cpuDictionary), this.cpuDictionary),
            new RangeFilter('Min CPU Frequency',
                'cpuFrequency', false,
                NumberComparisons.GreaterEqual,
                'HZ',
                500_000_000,
                10_000_000_000,
                undefined,
                2_500_000_000)
        ];
    }

    createCollectionItemComponent(item: CpuPreview, componentFactoryResolver: ComponentFactoryResolver, viewContainerRef: ViewContainerRef) {
        const component = viewContainerRef.createComponent<CpuItemComponent>(
            componentFactoryResolver.resolveComponentFactory<CpuItemComponent>(CpuItemComponent)
        );

        component.instance.item = item;
        return component;
    }

    public getStatisticsPreviews(cpuId: number, page: PageRequest, query: Query): Observable<PagedResult<BenchmarkStatisticsPreview>> {
        return this.http.post<PagedResult<BenchmarkStatisticsPreview>>(this.getUrl(cpuId.toString() + this.statisticsRoute),
            new QueryRequest(page, query.orderBy.internalName, query.descending, query.filters));
    }
}
