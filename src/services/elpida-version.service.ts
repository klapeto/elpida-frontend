import {ComponentFactoryResolver, Injectable, ViewContainerRef} from '@angular/core';
import {CollectionService} from './collection-service';
import {ElpidaVersion} from '../models/elpida/elpidaVersion';
import {HttpClient} from '@angular/common/http';
import {Filter} from '../models/filter';
import {StringFilter} from '../models/filters/string-filter';
import {NumberFilter} from '../models/filters/number-filter';
import {OptionFilter} from '../models/filters/option-filter';
import {OsItemComponent} from '../components/collection/items/os-item/os-item.component';
import {ElpidaItemComponent} from '../components/collection/items/elpida-item/elpida-item.component';

@Injectable({
    providedIn: 'root'
})
export class ElpidaVersionService extends CollectionService<ElpidaVersion, ElpidaVersion> {

    public constructor(http: HttpClient) {
        super(http);
    }

    protected readonly baseRoute: string = 'ElpidaVersion';

    private compilers = [
        'GNU'
    ];

    createAdvancedFilters(): Filter[] {
        return [
            new NumberFilter('Major version', 'majorVersion', true),
            new NumberFilter('Minor version', 'minorVersion', true),
            new NumberFilter('Revision version', 'revisionVersion', true),
            new NumberFilter('Build version', 'buildVersion', true),
            new StringFilter('Compiler name', 'compilerName', true),
            new StringFilter('Compiler version', 'compilerVersion', true),
        ];
    }

    createCollectionItemComponent(item: ElpidaVersion, componentFactoryResolver: ComponentFactoryResolver, viewContainerRef: ViewContainerRef): any {
        const component = viewContainerRef.createComponent<ElpidaItemComponent>(
            componentFactoryResolver.resolveComponentFactory<ElpidaItemComponent>(ElpidaItemComponent)
        );

        component.instance.item = item;
        return component;
    }

    createOrderByFilters(): Filter[] {
        return this.createAdvancedFilters();
    }

    createSearchFilter(): StringFilter {
        return undefined;
    }

    createSimpleFilters(): Filter[] {
        return [
          new OptionFilter('Compiler', 'compilerName', this.compilers),
          new NumberFilter('Major version', 'majorVersion', true),
          new NumberFilter('Minor version', 'minorVersion', true),
          new NumberFilter('Revision version', 'revisionVersion', true),
          new NumberFilter('Build version', 'buildVersion', true),
        ];
    }
}
