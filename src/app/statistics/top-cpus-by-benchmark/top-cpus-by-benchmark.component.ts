import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BenchmarkStatisticsService} from '../../../services/benchmark-statistics.service';
import {BenchmarkService} from '../../../services/benchmark.service';
import {Benchmark} from '../../../models/benchmark/benchmark';
import {NumberFilterModel} from '../../../models/filters/number-filter.model';
import {FilterModel} from '../../../models/filter.model';
import {PagedResultDto} from '../../../dtos/paged-result.dto';
import {BenchmarkStatisticsPreview} from '../../../models/benchmark-statistics/benchmark-statistics-preview';
import {ValueConverter} from '../../../services/value-converter';
import {BenchmarkComparison} from '../../../models/benchmark/benchmark-score-specification';
import {ComparisonModel} from '../../../models/comparison.model';

@Component({
    selector: 'app-top-cpus-by-benchmark',
    templateUrl: './top-cpus-by-benchmark.component.html',
    styleUrls: ['./top-cpus-by-benchmark.component.css']
})
export class TopCpusByBenchmarkComponent implements OnInit {

    public benchmark: Benchmark;

    public filters: FilterModel[];
    public orderBy: FilterModel;

    public chartXAxisLabel: string;

    public chartData: any;

    public colourScheme = {domain: ['#898EE2FF']};

    constructor(private route: ActivatedRoute,
                private benchmarkService: BenchmarkService,
                public statisticsService: BenchmarkStatisticsService,
                public valueConverter: ValueConverter) {
    }

    async ngOnInit() {
        this.benchmark = await this.benchmarkService.getSingle(this.route.snapshot.paramMap.get('id')).toPromise();
        this.filters = [
            new NumberFilterModel('', 'benchmarkId', ComparisonModel.equals(), null, this.benchmark.id)
        ];
        this.orderBy = this.statisticsService.createBenchmarkScoreMeanFilter();
    }

    public getComparisonDescription(): string {
        return this.benchmark.scoreSpecification.comparison === BenchmarkComparison.Lower ?
            'Lower is better'
            : 'Higher is better';
    }

    public pageLoaded(page: PagedResultDto<BenchmarkStatisticsPreview>) {
        if (this.chartData === undefined) {
            if (page.items.length > 0) {
                const value = this.valueConverter.getValueScaleSI(page.items[0].mean);
                this.chartXAxisLabel = value.suffix + this.benchmark.scoreSpecification.unit;
                this.chartData = page.items.map(i => {
                    return {
                        'name': i.cpuModelName,
                        'value': i.mean / value.value
                    };
                });
            }
        }
    }
}
