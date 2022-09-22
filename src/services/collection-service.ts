import {ICollectionService} from './interfaces/icollection-service';
import {HttpClient, HttpParams} from '@angular/common/http';
import {QueryModel} from '../models/query.model';
import {PagedResultDto} from '../dtos/paged-result.dto';
import {QueryDto} from '../dtos/query.dto';
import {environment} from '../environments/environment';
import {StringFilterModel} from '../models/filters/string-filter.model';

export abstract class CollectionService<TModel, TPreview> implements ICollectionService<TModel, TPreview> {

    protected readonly baseUrl: string = environment.apiUrl;

    protected readonly abstract baseRoute: string;

    protected constructor(protected readonly http: HttpClient) {

    }

    public getPreviews(query: QueryDto): Promise<PagedResultDto<TPreview>> {
        return this.http.get<PagedResultDto<TPreview>>(`${this.baseUrl + this.baseRoute}`, {params: CollectionService.getHttpParamObject(query)}).toPromise();
    }

    // public getPreviewsFromRawParams(queryParams: { [param: string]: string }): Promise<PagedResultDto<TPreview>> {
    //     return this.http.get<PagedResultDto<TPreview>>(`${this.baseUrl + this.baseRoute}`, {params: queryParams}).toPromise();
    // }

    public getSingle(id: string): Promise<TModel> {
        return this.http.get<TModel>(this.getUrl(id)).toPromise();
    }

    public abstract createSimpleQuery(): QueryModel;

    public abstract createAdvancedQuery(): QueryModel;

    public abstract createSearchFilter(): StringFilterModel | null;

    protected getUrl(route: string): string {
        return `${this.baseUrl + this.baseRoute}/${route}`;
    }

    private static isNotEmpty(value: any): boolean {
        return value !== undefined
            && value !== null
            && value !== '';
    }

    public static getHttpParamObject(query: QueryDto): HttpParams {
        return new HttpParams({fromObject: CollectionService.getParamObject(query)});
    }


    public static getParamObject(query: QueryDto): any {
        const retValue = {};

        if (CollectionService.isNotEmpty(query.orderBy)) {
            retValue['orderBy'] = query.orderBy;
        }

        if (CollectionService.isNotEmpty(query.pageRequest.count)) {
            retValue['count'] = query.pageRequest.count.toString();
        }

        if (CollectionService.isNotEmpty(query.pageRequest.next)) {
            retValue['next'] = query.pageRequest.next.toString();
        }

        if (CollectionService.isNotEmpty(query.descending)) {
            retValue['descending'] = query.descending.toString();
        }

        if (query.filters !== undefined) {
            query.filters.forEach((f, i) => {
                retValue[`filters[${i}].name`] = f.name;
                retValue[`filters[${i}].comparison`] = f.comparison;
                retValue[`filters[${i}].value`] = f.value.toString();
            });
        }

        return retValue;
    }
}
