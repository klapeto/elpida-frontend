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
import {environment} from '../environments/environment';
import {error} from 'protractor';

export abstract class CollectionService<TModel, TPreview> implements ICollectionService<TModel, TPreview> {

    protected constructor(protected readonly http: HttpClient) {

    }

    protected readonly baseUrl: string = environment.apiUrl;
    protected readonly searchRoute: string = 'search';

    protected readonly abstract baseRoute: string;


    protected getUrl(route: string): string {
        return this.baseUrl + this.baseRoute + '/' + route;
    }

    public getPreviews(page: PageRequest, query: Query): Observable<PagedResult<TPreview>> {
        return this.http.post<PagedResult<TPreview>>(this.getUrl(this.searchRoute),
            new QueryRequest(page, query.orderBy?.internalName, query.descending, query.filters));
    }

    public getSingle(id: string): Observable<TModel> {
        return this.http.get<TModel>(this.getUrl(id));
    }

    abstract createAdvancedFilters(): Filter[];

    abstract createOrderByFilters(): Filter[];

    abstract createSearchFilter(): StringFilter;

    abstract createSimpleFilters(): Filter[];

    abstract createCollectionItemComponent(item: TPreview,
                                           componentFactoryResolver: ComponentFactoryResolver,
                                           viewContainerRef: ViewContainerRef,
                                           customRoutePrefix: string): any;

    public createDefaultQuery(): Query {
        return new Query([], undefined, false);
    }
}