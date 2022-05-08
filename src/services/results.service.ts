import {Injectable} from '@angular/core';
import {ResultPreview} from '../models/result/result-preview';
import {Result} from '../models/result/result';
import {HttpClient} from '@angular/common/http';
import {CollectionService} from './collection-service';
import {StringFilterModel} from '../models/filters/string-filter.model';
import {OptionFilterModel, OptionModel} from '../models/filters/option-filter.model';
import {DateFilterModel} from '../models/filters/date-filter.model';
import {CpuService} from './cpu.service';
import {NumberFilterModel} from '../models/filters/number-filter.model';
import {QueryModel} from '../models/query.model';
import {DtoService} from './dto.service';

@Injectable({
    providedIn: 'root'
})
export class ResultsService extends CollectionService<Result, ResultPreview> {

    constructor(http: HttpClient, private readonly cpuService: CpuService, dtoService: DtoService) {
        super(http, dtoService);
    }

    protected readonly baseRoute: string = 'result';

    private oses: OptionModel[] = [
        new OptionModel('Windows'),
        new OptionModel('Linux')
    ];

    public createSimpleQuery(): QueryModel {
        return new QueryModel(this.cpuService.createSimpleQuery()
            .filters
            .concat([new OptionFilterModel('Os', 'osCategory', this.oses)]));
    }

    public createAdvancedQuery(): QueryModel {
        return new QueryModel([
            new StringFilterModel('Benchmark Name', 'benchmarkName'),
            new NumberFilterModel('Main Memory Size', 'memorySize'),
            new StringFilterModel('Os Category', 'osCategory'),
            new StringFilterModel('Os Name', 'osName'),
            new StringFilterModel('Os Version', 'osVersion'),
            new DateFilterModel('Timestamp', 'timeStamp'),
        ]);
    }

    public createSearchFilter(): StringFilterModel {
        return new StringFilterModel('Benchmark Name', 'benchmarkName');
    }
}
