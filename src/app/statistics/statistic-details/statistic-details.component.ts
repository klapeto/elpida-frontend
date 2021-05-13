import {Component, OnInit} from '@angular/core';
import {BenchmarkStatisticsService} from '../../../services/benchmark-statistics.service';
import {Router} from '@angular/router';
import {BenchmarkStatistics} from '../../../models/benchmark-statistics/benchmark-statistics';
import {ValueConverter} from '../../../services/value-converter';

import * as shape from 'd3-shape';
import {FrequencyClass} from '../../../models/benchmark-statistics/frequency-class';

@Component({
    selector: 'app-statistic-details',
    templateUrl: './statistic-details.component.html',
    styleUrls: ['./statistic-details.component.css']
})
export class StatisticDetailsComponent {

    data: object[];

    curve = shape.curveBumpX;

    scoreMean: number;
    scoreSuffix: string;

    colorScheme = {
        domain: ['#898ee2']
    };

    public statistics: BenchmarkStatistics;

    constructor(private readonly statisticsService: BenchmarkStatisticsService,
                private readonly router: Router,
                private readonly valueConverter: ValueConverter) {

        const tokens = this.router.url.split('/');
        statisticsService.getSingle(tokens[tokens.length - 1]).subscribe(r => {
            this.statistics = r;
            const scoreData = this.valueConverter.getToSI(r.mean);
            this.scoreMean = scoreData.value;
            this.scoreSuffix = scoreData.suffix + this.statistics.benchmark.scoreSpecification.unit;

            this.data = [
                {
                    'name': this.statistics.benchmark.name,
                    'series': this.statistics.classes.map(x => {
                        return {
                            'name': this.getClassString(x),
                            'value': x.count
                        };
                    })
                }
            ];
        }, error => console.error(error));
    }

    private getClassString(cls: FrequencyClass): string {
        return this.valueConverter.convertToSI(cls.low, 2)
            + ' - ' + this.valueConverter.convertToSI(cls.high, 2);
    }

    public formatNumberSI(arg: number): string {
        return ValueConverter.convertToSI(arg, 0);
    }

    getStringValue(value: number, suffix: string): string {
        const result = this.valueConverter.getToSI(value);

        return result.value + ' ' + result.suffix + suffix;
    }
}
