import {Injectable} from '@angular/core';
import {BenchmarkResultPreviewModel} from '../models/result/benchmark-result-preview.model';
import {BenchmarkResultModel} from '../models/result/benchmark-result.model';
import {HttpClient} from '@angular/common/http';
import {CollectionService} from './collection-service';
import {StringFilterModel} from '../models/filters/string-filter.model';
import {OptionFilterModel} from '../models/filters/option-filter.model';
import {DateFilterModel} from '../models/filters/date-filter.model';
import {CpuService} from './cpu.service';
import {NumberFilterModel} from '../models/filters/number-filter.model';
import {QueryModel} from '../models/query.model';
import {OptionModel} from '../models/option.model';

@Injectable({
    providedIn: 'root'
})
export class BenchmarkResultsService extends CollectionService<BenchmarkResultModel, BenchmarkResultPreviewModel> {

    protected readonly baseRoute: string = 'benchmarkresult';

    private oses: OptionModel[] = [
        new OptionModel('Windows'),
        new OptionModel('Linux')
    ];

    private readonly benchmarkOptions: OptionModel[] = [
        new OptionModel('Overall memory latency'),
        new OptionModel('L1D Cache Latency'),
        new OptionModel('L2D Cache Latency'),
        new OptionModel('L3D Cache Latency'),
        new OptionModel('DRAM Latency'),
        new OptionModel('Memory Read Bandwidth'),
        new OptionModel('Floyd Steinberg Dithering'),
        new OptionModel('Png Encoding'),
        new OptionModel('Png Decoding'),
    ];

    public constructor(http: HttpClient, private readonly cpuService: CpuService) {
        super(http);
    }

    public createSimpleQuery(): QueryModel {
        return new QueryModel(this.cpuService.createSimpleQuery()
            .filters
            .concat([
                new OptionFilterModel('Benchmark', 'benchmarkName', this.benchmarkOptions),
                new OptionFilterModel('Os', 'osCategory', this.oses),
            ]));
    }

    public createAdvancedQuery(): QueryModel {
        return new QueryModel(this.cpuService.createAdvancedQuery()
            .filters
            .concat([
            new StringFilterModel('Benchmark Name', 'benchmarkName'),
            new NumberFilterModel('Main Memory Size', 'memorySize'),
            new StringFilterModel('Os Category', 'osCategory'),
            new StringFilterModel('Os Name', 'osName'),
            new StringFilterModel('Os Version', 'osVersion'),
            new DateFilterModel('Timestamp', 'timeStamp'),
        ]));
    }

    public createSearchFilter(): StringFilterModel {
        return new StringFilterModel('Benchmark Name', 'benchmarkName');
    }
}
