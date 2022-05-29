import {Component, Input} from '@angular/core';
import {BenchmarkStatisticsPreviewModel} from '../../../../models/benchmark-statistics/benchmark-statistics-preview.model';
import {ValueConverter} from '../../../../services/value-converter';

@Component({
    selector: 'app-benchmark-statistic-item',
    templateUrl: './benchmark-statistic-item.component.html',
    styleUrls: ['./benchmark-statistic-item.component.css']
})
export class BenchmarkStatisticItemComponent {

    @Input() public item: BenchmarkStatisticsPreviewModel;

    constructor(private readonly valueConverter: ValueConverter) {
    }

    public calculateActualStatisticValue(): string {
        return this.valueConverter.toStringSI(this.item.mean, this.item.benchmarkScoreUnit);
    }
}
