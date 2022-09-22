import {Injectable} from '@angular/core';
import {CollectionService} from './collection-service';
import {HttpClient} from '@angular/common/http';
import {BenchmarkModel} from '../models/benchmark/benchmark.model';
import {BenchmarkPreviewModel} from '../models/benchmark/benchmark-preview.model';
import {StringFilterModel} from '../models/filters/string-filter.model';
import {QueryModel} from '../models/query.model';

@Injectable({
    providedIn: 'root'
})
export class BenchmarkService extends CollectionService<BenchmarkModel, BenchmarkPreviewModel> {

    protected readonly baseRoute: string = 'benchmark';

    public constructor(http: HttpClient) {
        super(http);
    }


    public createAdvancedQuery(): QueryModel {
        return new QueryModel([this.createSearchFilter()]);
    }

    public createSimpleQuery(): QueryModel {
        return this.createAdvancedQuery();
    }

    public createSearchFilter(): StringFilterModel | null {
        return new StringFilterModel('Benchmark name', 'benchmarkName');
    }
}
