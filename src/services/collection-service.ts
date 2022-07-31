import {ICollectionService} from './interfaces/icollection-service';
import {HttpClient} from '@angular/common/http';
import {PageDto} from '../dtos/page.dto';
import {QueryModel} from '../models/query.model';
import {Observable} from 'rxjs';
import {PagedResultDto} from '../dtos/paged-result.dto';
import {QueryDto} from '../dtos/query.dto';
import {environment} from '../environments/environment';
import {StringFilterModel} from '../models/filters/string-filter.model';
import {DtoService} from './dto.service';

export abstract class CollectionService<TModel, TPreview> implements ICollectionService<TModel, TPreview> {

    protected readonly baseUrl: string = environment.apiUrl;
    protected readonly searchRoute: string = 'search';

    protected readonly abstract baseRoute: string;

    protected constructor(protected readonly http: HttpClient) {

    }

    public getPreviews(query: QueryDto): Promise<PagedResultDto<TPreview>> {
        return this.http.post<PagedResultDto<TPreview>>(this.getUrl(this.searchRoute), query).toPromise();
    }

    public getSingle(id: string): Promise<TModel> {
        return this.http.get<TModel>(this.getUrl(id)).toPromise();
    }

    public abstract createSimpleQuery(): QueryModel;

    public abstract createAdvancedQuery(): QueryModel;

    public abstract createSearchFilter(): StringFilterModel | null;

    protected getUrl(route: string): string {
        return `${this.baseUrl + this.baseRoute}/${route}`;
    }
}
