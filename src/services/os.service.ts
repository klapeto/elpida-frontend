import {ComponentFactoryResolver, Injectable, ViewContainerRef} from '@angular/core';
import {CollectionService} from './collection-service';
import {HttpClient} from '@angular/common/http';
import {Os} from '../models/os/os';
import {FilterModel} from '../models/filter.model';
import {StringFilterModel} from '../models/filters/string-filter.model';
import {OptionFilterModel} from '../models/filters/option-filter.model';
import {OsItemComponent} from '../components/collection/items/os-item/os-item.component';
import {DtoService} from './dto.service';
import {QueryModel} from '../models/query.model';
import {OptionModel} from '../models/option.model';

@Injectable({
    providedIn: 'root'
})
export class OsService extends CollectionService<Os, Os> {

    public constructor(http: HttpClient, dtoService: DtoService) {
        super(http, dtoService);
    }

    protected readonly baseRoute: string = 'Os';

    private oses: OptionModel[] = [
        new OptionModel('Windows'),
        new OptionModel('Linux'),
    ];

    createAdvancedFilters(): FilterModel[] {
        return [
            new StringFilterModel('Os category', 'osCategory'),
            new StringFilterModel('Os name', 'osName'),
            new StringFilterModel('Os version', 'osVersion')
        ];
    }

    createCollectionItemComponent(item: Os, componentFactoryResolver: ComponentFactoryResolver, viewContainerRef: ViewContainerRef): any {
        const component = viewContainerRef.createComponent<OsItemComponent>(
            componentFactoryResolver.resolveComponentFactory<OsItemComponent>(OsItemComponent)
        );

        component.instance.item = item;
        return component;
    }

    createOrderByFilters(): FilterModel[] {
        return this.createAdvancedFilters();
    }

    createSearchFilter(): StringFilterModel {
        return new StringFilterModel('Os name', 'osName');
    }

    createSimpleFilters(): FilterModel[] {
        return [
            new OptionFilterModel('Os', 'osCategory', this.oses)
        ];
    }

    createAdvancedQuery(): QueryModel {
        return undefined;
    }

    createSimpleQuery(): QueryModel {
        return undefined;
    }
}
