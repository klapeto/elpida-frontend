import {ComponentFactoryResolver, Injectable, ViewContainerRef} from '@angular/core';
import {CollectionService} from './collection-service';
import {HttpClient} from '@angular/common/http';
import {Benchmark} from '../models/benchmark/benchmark';
import {BenchmarkPreview} from '../models/benchmark/benchmark-preview';
import {FilterModel} from '../models/filter.model';
import {StringFilterModel} from '../models/filters/string-filter.model';
import {BenchmarkItemComponent} from '../components/collection/items/benchmark-item/benchmark-item.component';
import {DtoService} from './dto.service';
import {QueryModel} from '../models/query.model';

@Injectable({
    providedIn: 'root'
})
export class BenchmarkService extends CollectionService<Benchmark, BenchmarkPreview> {

    public constructor(http: HttpClient, dtoService: DtoService) {
        super(http, dtoService);
    }

    protected readonly baseRoute: string = 'benchmark';

    createAdvancedFilters(): FilterModel[] {
        return [
            new StringFilterModel('Benchmark name', 'benchmarkName')
        ];
    }

    createCollectionItemComponent(item: BenchmarkPreview, componentFactoryResolver: ComponentFactoryResolver, viewContainerRef: ViewContainerRef, customRoutePrefix: string): any {
        const component = viewContainerRef.createComponent<BenchmarkItemComponent>(
            componentFactoryResolver.resolveComponentFactory<BenchmarkItemComponent>(BenchmarkItemComponent)
        );

        component.instance.item = item;

        if (customRoutePrefix !== undefined) {
            component.instance.routePrefix = customRoutePrefix;
        }


        return component;
    }

    createOrderByFilters(): FilterModel[] {
        return this.createAdvancedFilters();
    }

    createSearchFilter(): StringFilterModel {
        return new StringFilterModel('Benchmark name', 'benchmarkName');
    }

    createSimpleFilters(): FilterModel[] {
        return this.createAdvancedFilters();
    }

    createAdvancedQuery(): QueryModel {
        return undefined;
    }

    createSimpleQuery(): QueryModel {
        return undefined;
    }
}
