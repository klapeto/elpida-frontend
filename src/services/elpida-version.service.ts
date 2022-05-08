import {ComponentFactoryResolver, Injectable, ViewContainerRef} from '@angular/core';
import {CollectionService} from './collection-service';
import {ElpidaVersion} from '../models/elpida/elpidaVersion';
import {HttpClient} from '@angular/common/http';
import {FilterModel} from '../models/filter.model';
import {StringFilterModel} from '../models/filters/string-filter.model';
import {NumberFilterModel} from '../models/filters/number-filter.model';
import {OptionFilterModel, OptionModel} from '../models/filters/option-filter.model';
import {ElpidaItemComponent} from '../components/collection/items/elpida-item/elpida-item.component';
import {QueryModel} from '../models/query.model';
import {DtoService} from './dto.service';

@Injectable({
    providedIn: 'root'
})
export class ElpidaVersionService extends CollectionService<ElpidaVersion, ElpidaVersion> {

    public constructor(http: HttpClient, dtoService: DtoService) {
        super(http, dtoService);
    }

    protected readonly baseRoute: string = 'ElpidaVersion';

    private compilers: OptionModel[] = [
        new OptionModel('GNU')
    ];

    createAdvancedFilters(): FilterModel[] {
        return [
            new NumberFilterModel('Major version', 'majorVersion'),
            new NumberFilterModel('Minor version', 'minorVersion'),
            new NumberFilterModel('Revision version', 'revisionVersion'),
            new NumberFilterModel('Build version', 'buildVersion'),
            new StringFilterModel('Compiler name', 'compilerName'),
            new StringFilterModel('Compiler version', 'compilerVersion'),
        ];
    }

    createCollectionItemComponent(item: ElpidaVersion, componentFactoryResolver: ComponentFactoryResolver, viewContainerRef: ViewContainerRef): any {
        const component = viewContainerRef.createComponent<ElpidaItemComponent>(
            componentFactoryResolver.resolveComponentFactory<ElpidaItemComponent>(ElpidaItemComponent)
        );

        component.instance.item = item;
        return component;
    }

    createOrderByFilters(): FilterModel[] {
        return this.createAdvancedFilters();
    }

    createSearchFilter(): StringFilterModel {
        return undefined;
    }

    createSimpleFilters(): FilterModel[] {
        return [
            new OptionFilterModel('Compiler', 'compilerName', this.compilers),
            new NumberFilterModel('Major version', 'majorVersion'),
            new NumberFilterModel('Minor version', 'minorVersion'),
            new NumberFilterModel('Revision version', 'revisionVersion'),
            new NumberFilterModel('Build version', 'buildVersion'),
        ];
    }

    createAdvancedQuery(): QueryModel {
        return undefined;
    }

    createSimpleQuery(): QueryModel {
        return undefined;
    }
}
