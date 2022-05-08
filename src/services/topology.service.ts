import {ComponentFactoryResolver, Injectable, ViewContainerRef} from '@angular/core';
import {CollectionService} from './collection-service';
import {HttpClient} from '@angular/common/http';
import {FilterModel} from '../models/filter.model';
import {StringFilterModel} from '../models/filters/string-filter.model';
import {Topology} from '../models/topology/topology';
import {TopologyPreview} from '../models/topology/topology-preview';
import {NumberFilterModel} from '../models/filters/number-filter.model';
import {RangeFilterModel} from '../models/filters/range-filter.model';
import {TopologyItemComponent} from '../components/collection/items/topology-item/topology-item.component';
import {CpuService} from './cpu.service';
import {DtoService} from './dto.service';
import {QueryModel} from '../models/query.model';
import {ComparisonModel} from '../models/comparison.model';

@Injectable({
    providedIn: 'root'
})
export class TopologyService extends CollectionService<Topology, TopologyPreview> {

    public constructor(http: HttpClient, private cpuService: CpuService, dtoService: DtoService) {
        super(http, dtoService);
    }

    protected readonly baseRoute: string = 'topology';

    createAdvancedFilters(): FilterModel[] {
        return this.cpuService.createAdvancedQuery()
            .filters
            .concat([
            new NumberFilterModel('CPU Packages', 'cpuPackages'),
            new NumberFilterModel('CPU Numa Nodes', 'cpuNumaNodes'),
            new NumberFilterModel('CPU Cores', 'cpuCores'),
            new NumberFilterModel('CPU Logical Cores', 'cpuLogicalCores')
        ]);
    }

    createCollectionItemComponent(item: TopologyPreview, componentFactoryResolver: ComponentFactoryResolver, viewContainerRef: ViewContainerRef): any {

        const component = viewContainerRef.createComponent<TopologyItemComponent>(
            componentFactoryResolver.resolveComponentFactory<TopologyItemComponent>(TopologyItemComponent)
        );

        component.instance.item = item;
        return component;
    }

    createOrderByFilters(): FilterModel[] {
        return this.createAdvancedFilters();
    }

    createSearchFilter(): StringFilterModel {
        return this.cpuService.createSearchFilter();
    }

    createSimpleFilters(): FilterModel[] {
        return this.cpuService.createSimpleQuery()
            .filters
            .concat([
            new RangeFilterModel('Min CPU Cores',
                'cpuCores',
                ComparisonModel.greaterEqual(),
                'c',
                1,
                512,
                1,
                1),
            new RangeFilterModel('Max CPU Cores',
                'cpuCores',
                ComparisonModel.lessEqual(),
                'c',
                1,
                512,
                1,
                32),
            new RangeFilterModel('Min CPU Logical Cores',
                'cpuLogicalCores',
                ComparisonModel.greaterEqual(),
                't',
                1,
                512,
                1,
                1),
            new RangeFilterModel('Min CPU Logical Cores',
                'cpuLogicalCores',
                ComparisonModel.lessEqual(),
                't',
                1,
                512,
                1,
                32)
        ]);
    }

    createAdvancedQuery(): QueryModel {
        return undefined;
    }

    createSimpleQuery(): QueryModel {
        return undefined;
    }
}
