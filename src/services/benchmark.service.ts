import {Injectable} from '@angular/core';
import {CollectionService} from './collection-service';
import {HttpClient} from '@angular/common/http';
import {BenchmarkModel} from '../models/benchmark/benchmark.model';
import {BenchmarkPreviewModel} from '../models/benchmark/benchmark-preview.model';
import {StringFilterModel} from '../models/filters/string-filter.model';
import {DtoService} from './dto.service';
import {QueryModel} from '../models/query.model';

@Injectable({
    providedIn: 'root'
})
export class BenchmarkService extends CollectionService<BenchmarkModel, BenchmarkPreviewModel> {

    public constructor(http: HttpClient, dtoService: DtoService) {
        super(http, dtoService);
    }

    protected readonly baseRoute: string = 'benchmark';


    createAdvancedQuery(): QueryModel {
        return new QueryModel([this.createSearchFilter()]);
    }

    createSimpleQuery(): QueryModel {
        return this.createAdvancedQuery();
    }

    createSearchFilter(): StringFilterModel | null {
        return new StringFilterModel('Benchmark name', 'benchmarkName');
    }
}
