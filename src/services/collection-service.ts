import {ICollectionService} from './interfaces/icollection-service';
import {HttpClient} from '@angular/common/http';
import {PageRequest} from '../models/page-request';
import {Query} from '../models/query';
import {Observable} from 'rxjs';
import {PagedResult} from '../models/paged-result';
import {QueryRequest} from '../models/query-request';
import {Filter} from '../models/filter';
import {StringFilter} from '../models/filters/string-filter';
import {ComponentFactoryResolver, ViewContainerRef} from '@angular/core';

export abstract class CollectionService<TModel, TPreview> implements ICollectionService<TModel, TPreview> {

    protected constructor(private readonly http: HttpClient) {

    }

    //private readonly baseUrl: string = 'https://api.elpida.dev/api/v1/';
    private readonly baseUrl: string = 'http://localhost:5000/api/v1';
    private readonly searchRoute: string = 'search';

    protected readonly abstract baseRoute: string;

    private getUrl(route: string): string {
        return this.baseUrl + '/' + this.baseRoute + '/' + route;
    }

    public getPreviews(page: PageRequest, query: Query): Observable<PagedResult<TPreview>> {
        return this.http.post<PagedResult<TPreview>>(this.getUrl(this.searchRoute),
            new QueryRequest(page, query.orderBy.internalName, query.descending, query.filters));
    }

    public getSingle(id: string): Observable<TModel> {
        return this.http.get<TModel>(this.getUrl(id));
    }

    abstract createAdvancedFilters(): Filter[];

    abstract createDefaultOrderByFilter(): Filter;

    abstract createOrderByFilters(): Filter[];

    abstract createSearchFilter(): StringFilter;

    abstract createSimpleFilters(): Filter[];

    abstract createCollectionItemComponent(item: TPreview,
                                           componentFactoryResolver: ComponentFactoryResolver,
                                           viewContainerRef: ViewContainerRef): any;
}