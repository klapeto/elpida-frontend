import {Injectable} from '@angular/core';
import {CollectionService} from './collection-service';
import {HttpClient} from '@angular/common/http';
import {StringFilterModel} from '../models/filters/string-filter.model';
import {TopologyModel} from '../models/topology/topology.model';
import {TopologyPreviewModel} from '../models/topology/topology-preview.model';
import {NumberFilterModel} from '../models/filters/number-filter.model';
import {RangeFilterModel} from '../models/filters/range-filter.model';
import {CpuService} from './cpu.service';
import {DtoService} from './dto.service';
import {QueryModel} from '../models/query.model';
import {ComparisonModel} from '../models/comparison.model';

@Injectable({
    providedIn: 'root'
})
export class TopologyService extends CollectionService<TopologyModel, TopologyPreviewModel> {

    protected readonly baseRoute: string = 'topology';

    public constructor(http: HttpClient, private cpuService: CpuService, dtoService: DtoService) {
        super(http, dtoService);
    }

    public createAdvancedQuery(): QueryModel {
        return new QueryModel(this.cpuService.createAdvancedQuery()
            .filters
            .concat([
                new NumberFilterModel('CPU Packages', 'cpuPackages'),
                new NumberFilterModel('CPU Numa Nodes', 'cpuNumaNodes'),
                new NumberFilterModel('CPU Cores', 'cpuCores'),
                new NumberFilterModel('CPU Logical Cores', 'cpuLogicalCores')
            ]));
    }

    public createSimpleQuery(): QueryModel {
        return new QueryModel(this.cpuService.createSimpleQuery()
            .filters
            .concat([
                new RangeFilterModel('Min CPU Cores',
                    'cpuCores',
                    ComparisonModel.greaterEqual(),
                    'c',
                    1,
                    512,
                    1,
                    1),
                new RangeFilterModel('Max CPU Cores',
                    'cpuCores',
                    ComparisonModel.lessEqual(),
                    'c',
                    1,
                    512,
                    1,
                    32),
                new RangeFilterModel('Min CPU Logical Cores',
                    'cpuLogicalCores',
                    ComparisonModel.greaterEqual(),
                    't',
                    1,
                    512,
                    1,
                    1),
                new RangeFilterModel('Min CPU Logical Cores',
                    'cpuLogicalCores',
                    ComparisonModel.lessEqual(),
                    't',
                    1,
                    512,
                    1,
                    32)
            ]));
    }

    public createSearchFilter(): StringFilterModel | null {
        return null;
    }
}
