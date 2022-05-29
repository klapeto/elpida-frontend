import {Injectable} from '@angular/core';
import {CpuPreviewModel} from '../models/cpu/cpu-preview.model';
import {CpuModel} from '../models/cpu/cpu.model';
import {CollectionService} from './collection-service';
import {StringFilterModel} from '../models/filters/string-filter.model';
import {OptionFilterModel} from '../models/filters/option-filter.model';
import {RangeFilterModel} from '../models/filters/range-filter.model';
import {NumberFilterModel} from '../models/filters/number-filter.model';
import {HttpClient} from '@angular/common/http';
import {QueryModel} from '../models/query.model';
import {DtoService} from './dto.service';
import {ComparisonModel} from '../models/comparison.model';
import { OptionModel } from 'src/models/option.model';

@Injectable({
    providedIn: 'root'
})
export class CpuService extends CollectionService<CpuModel, CpuPreviewModel> {

    public constructor(http: HttpClient, dtoService: DtoService) {
        super(http, dtoService);
    }

    protected readonly baseRoute: string = 'cpu';

    protected readonly statisticsRoute = 'TaskStatistics/Search';

    private readonly cpuOptions: OptionModel[] = [
        new OptionModel('AMD Ryzen 3', 'AMD Ryzen 3'),
        new OptionModel('AMD Ryzen 5', 'AMD Ryzen 5'),
        new OptionModel('AMD Ryzen 7', 'AMD Ryzen 7'),
        new OptionModel('AMD Ryzen 9', 'AMD Ryzen 9'),
        new OptionModel('AMD Ryzen Threadripper', 'AMD Ryzen Threadripper'),
        new OptionModel('AMD Epyc', 'AMD Epyc'),
        new OptionModel('Intel Celeron', 'Intel(R) Celeron'),
        new OptionModel('Intel Pentium', 'Intel(R) Pentium'),
        new OptionModel('Intel Core i3', 'Intel(R) Core(TM) i3'),
        new OptionModel('Intel Core i5', 'Intel(R) Core(TM) i5'),
        new OptionModel('Intel Core i7', 'Intel(R) Core(TM) i7'),
        new OptionModel('Intel Core i9', 'Intel(R) Core(TM) i9'),
        new OptionModel('Intel Xeon', 'Intel(R) Xeon(TM)')
    ];

    createAdvancedQuery(): QueryModel {
        return new QueryModel([
            new StringFilterModel('CPU Vendor', 'cpuVendor'),
            new StringFilterModel('CPU Brand', 'cpuModelName'),
            new NumberFilterModel('CPU Frequency', 'cpuFrequency')
        ], null, false);
    }

    createSearchFilter(): StringFilterModel | null {
        return new StringFilterModel('CPU Brand', 'cpuModelName');
    }

    createSimpleQuery(): QueryModel {
        return new QueryModel([
            new OptionFilterModel('CPU Brand', 'cpuModelName', this.cpuOptions),
            new RangeFilterModel('Min CPU Frequency',
                'cpuFrequency',
                ComparisonModel.greaterEqual(),
                'HZ',
                500_000_000,
                10_000_000_000,
                undefined,
                2_500_000_000)
        ], null, false);
    }

    // public getStatisticsPreviews(cpuId: number, page: PageRequest, query: Query): Observable<PagedResult<BenchmarkStatisticsPreview>> {
    //     return this.http.post<PagedResult<BenchmarkStatisticsPreview>>(this.getUrl(cpuId.toString() + this.statisticsRoute),
    //         new QueryRequest(page, query.orderBy, query.descending, query.filters));
    // }
}
