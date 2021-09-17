import {ComponentFactoryResolver, Injectable, ViewContainerRef} from '@angular/core';
import {CollectionService} from './collection-service';
import {HttpClient} from '@angular/common/http';
import {Os} from '../models/os/os';
import {Filter} from '../models/filter';
import {StringFilter} from '../models/filters/string-filter';
import {OptionFilter} from '../models/filters/option-filter';
import {BenchmarkItemComponent} from '../components/collection/items/benchmark-item/benchmark-item.component';
import {OsItemComponent} from '../components/collection/items/os-item/os-item.component';

@Injectable({
    providedIn: 'root'
})
export class OsService extends CollectionService<Os, Os> {

    public constructor(http: HttpClient) {
        super(http);
    }

    protected readonly baseRoute: string = 'Os';

    private oses = [
        'Windows',
        'Linux'
    ];

    createAdvancedFilters(): Filter[] {
        return [
            new StringFilter('Os category', 'osCategory', true),
            new StringFilter('Os name', 'osName', true),
            new StringFilter('Os version', 'osVersion', true)
        ];
    }

    createCollectionItemComponent(item: Os, componentFactoryResolver: ComponentFactoryResolver, viewContainerRef: ViewContainerRef): any {
        const component = viewContainerRef.createComponent<OsItemComponent>(
            componentFactoryResolver.resolveComponentFactory<OsItemComponent>(OsItemComponent)
        );

        component.instance.item = item;
        return component;
    }

    createOrderByFilters(): Filter[] {
        return this.createAdvancedFilters();
    }

    createSearchFilter(): StringFilter {
        return new StringFilter('Os name', 'osName', true);
    }

    createSimpleFilters(): Filter[] {
        return [
            new OptionFilter('Os', 'osCategory', this.oses)
        ];
    }
}
