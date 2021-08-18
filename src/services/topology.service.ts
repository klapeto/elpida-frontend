import {ComponentFactoryResolver, Injectable, ViewContainerRef} from '@angular/core';
import {CollectionService} from './collection-service';
import {Cpu} from '../models/cpu/cpu';
import {CpuPreview} from '../models/cpu/cpu-preview';
import {HttpClient} from '@angular/common/http';
import {Filter} from '../models/filter';
import {StringFilter} from '../models/filters/string-filter';
import {Topology} from '../models/topology/topology';
import {TopologyPreview} from '../models/topology/topology-preview';
import {NumberComparisons, NumberFilter} from '../models/filters/number-filter';
import {OptionFilter} from '../models/filters/option-filter';
import {RangeFilter} from '../models/filters/range-filter';
import {CpuItemComponent} from '../components/collection/items/cpu-item/cpu-item.component';
import {TopologyItemComponent} from '../components/collection/items/topology-item/topology-item.component';
import {CpuService} from './cpu.service';

@Injectable({
    providedIn: 'root'
})
export class TopologyService extends CollectionService<Topology, TopologyPreview> {

    public constructor(http: HttpClient, private cpuService: CpuService) {
        super(http);
    }

    protected readonly baseRoute: string = 'topology';

    createAdvancedFilters(): Filter[] {
        return this.cpuService.createAdvancedFilters()
            .concat([
            new NumberFilter('CPU Packages', 'cpuPackages', true),
            new NumberFilter('CPU Numa Nodes', 'cpuNumaNodes', true),
            new NumberFilter('CPU Cores', 'cpuCores', true),
            new NumberFilter('CPU Logical Cores', 'cpuLogicalCores', true)
        ]);
    }

    createCollectionItemComponent(item: TopologyPreview, componentFactoryResolver: ComponentFactoryResolver, viewContainerRef: ViewContainerRef): any {

        const component = viewContainerRef.createComponent<TopologyItemComponent>(
            componentFactoryResolver.resolveComponentFactory<TopologyItemComponent>(TopologyItemComponent)
        );

        component.instance.item = item;
        return component;
    }

    createOrderByFilters(): Filter[] {
        return this.createAdvancedFilters();
    }

    createSearchFilter(): StringFilter {
        return this.cpuService.createSearchFilter();
    }

    createSimpleFilters(): Filter[] {
        return this.cpuService.createSimpleFilters().concat([
            new RangeFilter('Min CPU Cores',
                'cpuCores',
                false,
                NumberComparisons.GreaterEqual,
                'c',
                1,
                512,
                1,
                1),
            new RangeFilter('Max CPU Cores',
                'cpuCores',
                false,
                NumberComparisons.LessEqual,
                'c',
                1,
                512,
                1,
                32),
            new RangeFilter('Min CPU Logical Cores',
                'cpuLogicalCores',
                false,
                NumberComparisons.GreaterEqual,
                't',
                1,
                512,
                1,
                1),
            new RangeFilter('Min CPU Logical Cores',
                'cpuLogicalCores',
                false,
                NumberComparisons.LessEqual,
                't',
                1,
                512,
                1,
                32)
        ]);
    }
}
