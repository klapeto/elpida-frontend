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

    protected constructor(protected readonly http: HttpClient, protected readonly dtoService: DtoService) {

    }

    public getPreviews(page: PageDto, query: QueryModel): Observable<PagedResultDto<TPreview>> {
        const queryRequest = new QueryDto(
            page,
            query.orderBy,
            query.descending,
            query.filters
                .filter(f => f.isSet())
                .map(f => this.dtoService.createFromFilter(f))
        );
        return this.http.post<PagedResultDto<TPreview>>(this.getUrl(this.searchRoute), queryRequest);
    }

    public getSingle(id: string): Observable<TModel> {
        return this.http.get<TModel>(this.getUrl(id));
    }

    public abstract createSimpleQuery(): QueryModel;

    public abstract createAdvancedQuery(): QueryModel;

    public abstract createSearchFilter(): StringFilterModel | null;


    protected getUrl(route: string): string {
        return `${this.baseUrl + this.baseRoute}/${route}`;
    }
}
