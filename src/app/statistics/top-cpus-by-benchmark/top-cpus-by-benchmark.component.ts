import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BenchmarkStatisticsService} from '../../../services/benchmark-statistics.service';
import {BenchmarkService} from '../../../services/benchmark.service';
import {BenchmarkModel} from '../../../models/benchmark/benchmark.model';
import {NumberFilterModel} from '../../../models/filters/number-filter.model';
import {FilterModel} from '../../../models/filter.model';
import {PagedResultDto} from '../../../dtos/paged-result.dto';
import {BenchmarkStatisticsPreviewModel} from '../../../models/benchmark-statistics/benchmark-statistics-preview.model';
import {ValueConverter} from '../../../services/value-converter';
import {BenchmarkComparison} from '../../../models/benchmark/benchmark-score-specification.model';
import {ComparisonModel} from '../../../models/comparison.model';
import {ImageLinksService} from '../../../services/image-links.service';
import {BenchmarkPreviewModel} from '../../../models/benchmark/benchmark-preview.model';

@Component({
    selector: 'app-top-cpus-by-benchmark',
    templateUrl: './top-cpus-by-benchmark.component.html',
    styleUrls: ['./top-cpus-by-benchmark.component.css']
})
export class TopCpusByBenchmarkComponent implements OnInit {

    public benchmark: BenchmarkModel;

    public filters: FilterModel[];
    public orderBy: string;

    public chartXAxisLabel: string;

    public chartData: any;

    public colourScheme: { domain: string[] } = {domain: ['#898EE2FF']};

    public constructor(private readonly route: ActivatedRoute,
                private readonly benchmarkService: BenchmarkService,
                public readonly imageLinksService: ImageLinksService,
                public readonly statisticsService: BenchmarkStatisticsService,
                public readonly valueConverter: ValueConverter) {
    }

    public calculateActualStatisticValue(preview: BenchmarkStatisticsPreviewModel): string {
        return this.valueConverter.toStringSI(preview.mean, preview.benchmarkScoreUnit);
    }

    public toItem(context: any): BenchmarkStatisticsPreviewModel  {
        return context as BenchmarkStatisticsPreviewModel;
    }

    public async ngOnInit(): Promise<void> {
        this.benchmark = await this.benchmarkService.getSingle(this.route.snapshot.paramMap.get('id'));
        this.filters = [
            new NumberFilterModel('', 'benchmarkId', ComparisonModel.equals(), null, this.benchmark.id)
        ];
        this.orderBy = this.statisticsService.createBenchmarkScoreMeanFilter().internalName;
    }

    public getComparisonDescription(): string {
        return this.benchmark.scoreSpecification.comparison === BenchmarkComparison.Lower ?
            'Lower is better'
            : 'Higher is better';
    }

    public pageLoaded(page: PagedResultDto<BenchmarkStatisticsPreviewModel>): void {
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
