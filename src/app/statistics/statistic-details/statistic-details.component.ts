import {Component, OnInit} from '@angular/core';
import {BenchmarkStatisticsService} from '../../../services/benchmark-statistics.service';
import {ActivatedRoute} from '@angular/router';
import {BenchmarkStatisticsModel} from '../../../models/benchmark-statistics/benchmark-statistics.model';
import {ValueConverter} from '../../../services/value-converter';

import * as shape from 'd3-shape';
import {FrequencyClassModel} from '../../../models/benchmark-statistics/frequency-class.model';
import {ImageLinksService} from '../../../services/image-links.service';

@Component({
    selector: 'app-statistic-details',
    templateUrl: './statistic-details.component.html',
    styleUrls: ['./statistic-details.component.css']
})
export class StatisticDetailsComponent implements OnInit {

    public data: object[];

    public curve: any = shape.curveBumpX;

    public score: string;

    public statistics: BenchmarkStatisticsModel;

    public constructor(private readonly statisticsService: BenchmarkStatisticsService,
                       public readonly imageLinksService: ImageLinksService,
                       private readonly route: ActivatedRoute,
                       public readonly valueConverter: ValueConverter) {
    }

    public yTickFormatter = (x: any) => this.valueConverter.toStringSI(x, '', 0);

    public async ngOnInit(): Promise<void> {
        this.statistics = await this.statisticsService.getSingle(this.route.snapshot.paramMap.get('id')).toPromise();
        this.score = this.valueConverter.toStringSI(this.statistics.mean, this.statistics.benchmark.scoreSpecification.unit);
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
    }

    public formatNumberSI(arg: number): string {
        return this.valueConverter.toStringSI(arg, null, 0);  // Use static because charts call this before construction????
    }

    private getClassString(cls: FrequencyClassModel): string {
        return `${this.valueConverter.toStringSI(cls.low, this.statistics.benchmark.scoreSpecification.unit, 0)} - ${this.valueConverter.toStringSI(cls.high, this.statistics.benchmark.scoreSpecification.unit, 0)}`;
    }
}
