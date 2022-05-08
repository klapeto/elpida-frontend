import {Injectable} from '@angular/core';
import {ResultPreview} from '../models/result/result-preview';
import {Result} from '../models/result/result';
import {HttpClient} from '@angular/common/http';
import {CollectionService} from './collection-service';
import {StringFilter} from '../models/filters/string-filter';
import {OptionFilter} from '../models/filters/option-filter';
import {DateFilter} from '../models/filters/date-filter';
import {CpuService} from './cpu.service';
import {NumberFilter} from '../models/filters/number-filter';
import {Query} from '../models/query';

@Injectable({
    providedIn: 'root'
})
export class ResultsService extends CollectionService<Result, ResultPreview> {

    constructor(http: HttpClient, private readonly cpuService: CpuService) {
        super(http);
    }

    protected readonly baseRoute: string = 'result';

    private oses = [
        'Windows',
        'Linux'
    ];

    public createSimpleQuery(): Query {
        return new Query(this.cpuService.createSimpleQuery()
            .filters
            .concat([new OptionFilter('Os', 'osCategory', this.oses)]));
    }

    public createAdvancedQuery(): Query {
        return new Query([
            new StringFilter('Benchmark Name', 'benchmarkName'),
            new NumberFilter('Main Memory Size', 'memorySize'),
            new StringFilter('Os Category', 'osCategory'),
            new StringFilter('Os Name', 'osName'),
            new StringFilter('Os Version', 'osVersion'),
            new DateFilter('Timestamp', 'timeStamp'),
        ]);
    }

    public createSearchFilter(): StringFilter {
        return new StringFilter('Benchmark Name', 'benchmarkName');
    }
}
