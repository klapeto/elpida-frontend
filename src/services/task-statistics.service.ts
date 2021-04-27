import {ComponentFactoryResolver, Injectable, ViewContainerRef} from '@angular/core';
import {CollectionService} from './collection-service';
import {HttpClient} from '@angular/common/http';
import {TaskStatisticsPreview} from '../models/task-statistics/task-statistics-preview';
import {TaskStatistics} from '../models/task-statistics/task-statistics';
import {Filter} from '../models/filter';
import {StringFilter} from '../models/filters/string-filter';
import {CpuService} from './cpu.service';
import {TaskStatisticItemComponent} from '../components/collection/items/task-statistic-item/task-statistic-item.component';

@Injectable({
    providedIn: 'root'
})
export class TaskStatisticsService extends CollectionService<TaskStatistics, TaskStatisticsPreview> {

    public constructor(http: HttpClient, private readonly cpuService: CpuService) {
        super(http);
    }

    protected readonly baseRoute: string = 'TaskStatistics';

    public createAdvancedFilters(): Filter[] {
        return this.cpuService.createAdvancedFilters();
    }

    public createCollectionItemComponent(item: TaskStatisticsPreview, componentFactoryResolver: ComponentFactoryResolver, viewContainerRef: ViewContainerRef): any {
        const component = viewContainerRef.createComponent<TaskStatisticItemComponent>(
            componentFactoryResolver.resolveComponentFactory<TaskStatisticItemComponent>(TaskStatisticItemComponent)
        );

        component.instance.item = item;
        return component;
    }

    public createDefaultOrderByFilter(): Filter {
        return this.cpuService.createDefaultOrderByFilter();
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
