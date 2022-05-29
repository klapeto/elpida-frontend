import {Component, OnInit} from '@angular/core';
import {BenchmarkStatisticsService} from '../../../services/benchmark-statistics.service';
import {ActivatedRoute, Router} from '@angular/router';
import {BenchmarkStatisticsModel} from '../../../models/benchmark-statistics/benchmark-statistics.model';
import {ValueConverter} from '../../../services/value-converter';

import * as shape from 'd3-shape';
import {FrequencyClassModel} from '../../../models/benchmark-statistics/frequency-class.model';

@Component({
    selector: 'app-statistic-details',
    templateUrl: './statistic-details.component.html',
    styleUrls: ['./statistic-details.component.css']
})
export class StatisticDetailsComponent implements OnInit {

    data: object[];

    curve = shape.curveBumpX;

    scoreMean: number;
    scoreSuffix: string;

    colorScheme = {
        domain: ['#898ee2']
    };

    public statistics: BenchmarkStatisticsModel;

    constructor(private readonly statisticsService: BenchmarkStatisticsService,
                private readonly route: ActivatedRoute,
                public readonly valueConverter: ValueConverter) {
    }

    private getClassString(cls: FrequencyClassModel): string {
        return `${this.valueConverter.toStringSI(cls.low)} - ${this.valueConverter.toStringSI(cls.high)}`;
    }

    public formatNumberSI(arg: number): string {
        return this.valueConverter.toStringSI(arg, '', 0);
    }

    ngOnInit(): void {
        this.statisticsService.getSingle(this.route.snapshot.paramMap.get('id')).subscribe(r => {
            this.statistics = r;
            const scoreData = this.valueConverter.getValueScaleSI(r.mean);
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
}
