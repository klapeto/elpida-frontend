import {Component, Input, OnInit} from '@angular/core';
import {Result} from '../../../models/result/result';
import {ImageLinksService} from '../../../services/image-links.service';
import {ValueConverter} from '../../../services/value-converter';

@Component({
    selector: 'app-result-summary',
    templateUrl: './result-summary.component.html',
    styleUrls: ['./result-summary.component.css']
})
export class ResultSummaryComponent implements OnInit {

    @Input() public readonly result: Result;

    data: object[];

    useLineChart: boolean;
    xAxisLabel = 'Input Size';
    yAxisLabel = 'Throughput';

    yAxisUnit: string;

    view: number[];

    public yTickFormatter = (x) => this.valueConverter.toStringSI(x, this.yAxisUnit);

    constructor(public readonly imageLinksService: ImageLinksService,
                public readonly valueConverter: ValueConverter) {
    }

    ngOnInit(): void {
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
