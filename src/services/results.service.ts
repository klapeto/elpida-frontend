import {ComponentFactoryResolver, Injectable, ViewContainerRef, ViewRef} from '@angular/core';
import {ResultPreview} from '../models/result/result-preview';
import {Result} from '../models/result/result';
import {HttpClient} from '@angular/common/http';
import {CollectionService} from './collection-service';
import {Filter} from '../models/filter';
import {StringFilter} from '../models/filters/string-filter';
import {OptionFilter} from '../models/filters/option-filter';
import {DateComparisons, DateFilter} from '../models/filters/date-filter';
import {CpuService} from './cpu.service';
import {NumberFilter} from '../models/filters/number-filter';
import {ResultItemComponent} from '../components/collection/items/result-item/result-item.component';
import {Query} from '../models/query';

@Injectable({
    providedIn: 'root'
})
export class ResultsService extends CollectionService<Result, ResultPreview> {

    constructor(http: HttpClient, private readonly cpuService: CpuService) {
        super(http);
    }

    protected readonly baseRoute: string = 'result';

    private oses = [
        'Windows',
        'Linux'
    ];

    public createSimpleFilters(): Filter[] {
        return this.cpuService.createSimpleFilters()
            .concat([new OptionFilter('Os', 'osCategory', this.oses)]);
    }

    public createAdvancedFilters(): Filter[] {
        return this.cpuService.createAdvancedFilters()
            .concat([
                new StringFilter('Benchmark Name', 'benchmarkName', true),
                new NumberFilter('Main Memory Size', 'memorySize', true),
                new StringFilter('Os Category', 'osCategory', true),
                new StringFilter('Os Name', 'osName', true),
                new StringFilter('Os Version', 'osVersion', true),
                new DateFilter('From', 'timeStamp', false, DateComparisons.GreaterEqual),
                new DateFilter('To', 'timeStamp', false, DateComparisons.LessEqual)
            ]);
    }

    public createOrderByFilters(): Filter[] {
        return this.cpuService.createOrderByFilters()
            .concat([
                new StringFilter('Benchmark Name', 'benchmarkName', true),
                new NumberFilter('Main Memory Size', 'memorySize', true),
                new NumberFilter('Os Category', 'osCategory', true),
                new NumberFilter('Os Name', 'osName', true),
                new NumberFilter('Os Version', 'osVersion', true),
                new DateFilter('Timestamp', 'timestamp', false),
            ]);
    }

    public createSearchFilter(): StringFilter {
        return new StringFilter('Benchmark Name', 'benchmarkName', true);
    }

   public createDefaultQuery(): Query {
        return new Query([], new DateFilter('Timestamp', 'timestamp', false), true);
    }

    public createCollectionItemComponent(item: ResultPreview, componentFactoryResolver: ComponentFactoryResolver, viewContainerRef: ViewContainerRef) {
        const component = viewContainerRef.createComponent<ResultItemComponent>(
            componentFactoryResolver.resolveComponentFactory<ResultItemComponent>(ResultItemComponent)
        );

        component.instance.item = item;
        return component;
    }
}
