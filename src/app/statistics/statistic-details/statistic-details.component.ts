import {Component, OnInit} from '@angular/core';
import {BenchmarkStatisticsService} from '../../../services/benchmark-statistics.service';
import {Router} from '@angular/router';
import {BenchmarkStatistics} from '../../../models/benchmark-statistics/benchmark-statistics';
import {ValueConverter} from '../../../services/value-converter';

@Component({
    selector: 'app-statistic-details',
    templateUrl: './statistic-details.component.html',
    styleUrls: ['./statistic-details.component.css']
})
export class StatisticDetailsComponent {

    public statistics: BenchmarkStatistics;

    constructor(private readonly statisticsService: BenchmarkStatisticsService,
                private readonly router: Router,
                private readonly valueConverter: ValueConverter) {

        const tokens = this.router.url.split('/');
        statisticsService.getSingle(tokens[tokens.length - 1]).subscribe(r => {
            this.statistics = r;
        }, error => console.error(error));
    }

    getStringValue(value: number, suffix: string): string {
        const result = this.valueConverter.getToSI(value);

        return result.value + ' ' + result.suffix + suffix;
    }
}
