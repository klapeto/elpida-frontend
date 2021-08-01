import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BenchmarkStatisticsService} from '../../../services/benchmark-statistics.service';
import {BenchmarkService} from '../../../services/benchmark.service';
import {Benchmark} from '../../../models/benchmark/benchmark';
import {NumberComparisons, NumberFilter} from '../../../models/filters/number-filter';
import {Filter} from '../../../models/filter';

@Component({
    selector: 'app-top-cpus-by-benchmark',
    templateUrl: './top-cpus-by-benchmark.component.html',
    styleUrls: ['./top-cpus-by-benchmark.component.css']
})
export class TopCpusByBenchmarkComponent implements OnInit {

    public benchmark: Benchmark;

    public filters: Filter[];
    public orderBy: Filter;

    constructor(private route: ActivatedRoute,
                private benchmarkService: BenchmarkService,
                public statisticsService: BenchmarkStatisticsService) {
    }

    async ngOnInit() {
        this.benchmark = await this.benchmarkService.getSingle(this.route.snapshot.paramMap.get('id')).toPromise();
        this.filters = [
            new NumberFilter('', 'benchmarkId', true, NumberComparisons.Equal, '', this.benchmark.id)
        ];
        this.orderBy = this.statisticsService.createBenchmarkScoreMeanFilter();
    }
}
