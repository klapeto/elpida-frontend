import {Component, Input, OnInit} from '@angular/core';
import {BenchmarkResultModel} from '../../../../models/result/benchmark-result.model';
import {ImageLinksService} from '../../../../services/image-links.service';
import {ValueConverter} from '../../../../services/value-converter';

@Component({
    selector: 'app-benchmark-result-summary',
    templateUrl: './benchmark-result-summary.component.html',
    styleUrls: ['./benchmark-result-summary.component.css']
})
export class BenchmarkResultSummaryComponent implements OnInit {

    @Input() public readonly result: BenchmarkResultModel;

    public data: object[];

    public useLineChart: boolean;
    public xAxisLabel: string = 'Input Size';
    public yAxisLabel: string = 'Throughput';

    public yAxisUnit: string;

    public view: number[];

    public constructor(public readonly imageLinksService: ImageLinksService,
                public readonly valueConverter: ValueConverter) {
    }

    public yTickFormatter = (x: any) => this.valueConverter.toStringSI(x, this.yAxisUnit);

    public ngOnInit(): void {
        const first = this.result.taskResults[0];
        this.useLineChart = this.result.taskResults.length > 1
            && this.result.taskResults.every(x => x.result.unit === first.result.unit && x.result.type === first.result.type);

        if (this.useLineChart) {

            this.yAxisLabel = first.result.name;
            this.yAxisUnit = first.result.unit;
            this.data = [
                {
                    'name': this.result.name,
                    'series': this.result.taskResults.map(r => {
                        return {
                            'name': this.valueConverter.toStringSI(r.inputSize, r.input?.unit),
                            'value': r.value
                        };
                    })
                }
            ];
        }
    }

    public formatNumberSI(arg: number): string {
        return this.valueConverter.toStringSI(arg, this.yAxisUnit);  // Use static because charts call this before construction????
    }

}
