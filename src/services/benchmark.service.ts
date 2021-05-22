import {ComponentFactoryResolver, Injectable, ViewContainerRef} from '@angular/core';
import {CollectionService} from './collection-service';
import {HttpClient} from '@angular/common/http';
import {Benchmark} from '../models/benchmark/benchmark';
import {BenchmarkPreview} from '../models/benchmark/benchmark-preview';
import {Filter} from '../models/filter';
import {StringFilter} from '../models/filters/string-filter';
import {BenchmarkItemComponent} from '../components/collection/items/benchmark-item/benchmark-item.component';

@Injectable({
  providedIn: 'root'
})
export class BenchmarkService extends CollectionService<Benchmark, BenchmarkPreview> {

  public constructor(http: HttpClient) {
    super(http);
  }

  protected readonly baseRoute: string = 'benchmark';

  createAdvancedFilters(): Filter[] {
    return [
      new StringFilter('Benchmark name', 'benchmarkName', true)
    ];
  }

  createCollectionItemComponent(item: BenchmarkPreview, componentFactoryResolver: ComponentFactoryResolver, viewContainerRef: ViewContainerRef): any {
    const component = viewContainerRef.createComponent<BenchmarkItemComponent>(
        componentFactoryResolver.resolveComponentFactory<BenchmarkItemComponent>(BenchmarkItemComponent)
    );

    component.instance.item = item;
    return component;
  }

  createOrderByFilters(): Filter[] {
    return this.createAdvancedFilters();
  }

  createSearchFilter(): StringFilter {
    return new StringFilter('Benchmark name', 'benchmarkName', true);
  }

  createSimpleFilters(): Filter[] {
    return this.createAdvancedFilters();
  }
}
