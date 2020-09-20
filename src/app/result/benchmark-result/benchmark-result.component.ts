import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {BenchmarkResult} from '../../../models/result/benchmark-result';
import {ValueConverter} from '../../../services/value-converter';
import {ResultType, TaskResult} from '../../../models/result/task-result';

@Component({
    selector: 'app-benchmark-result',
    templateUrl: './benchmark-result.component.html',
    styleUrls: ['./benchmark-result.component.css']
})
export class BenchmarkResultComponent implements OnInit {
    data: object[];

    useLineChart: boolean;
    xAxisLabel = 'Input Size';
    yAxisLabel = 'Throughput';

    xAxisUnit: string;
    yAxisUnit: string;

    view: number[];

    @Input() public readonly benchmarkResult: BenchmarkResult;

    constructor(public valueConverter: ValueConverter, public el: ElementRef) {

    }

    ngOnInit() {
        const first = this.benchmarkResult.taskResults[0];
        this.useLineChart = this.benchmarkResult.taskResults.length > 1
            && this.benchmarkResult.taskResults.every(x => x.name === first.name && x.type === first.type);

        if (this.useLineChart) {

            this.yAxisLabel = first.name;
            this.yAxisUnit = first.suffix;
            this.data = [
                {
                    'name': this.benchmarkResult.name,
                    'series': this.benchmarkResult.taskResults.map(r => {
                        return {
                            'name': this.valueConverter.convertToSI(r.inputSize),
                            'value': r.value
                        };
                    })
                }
            ];
        }
    }

    public formatNumberSI(arg: number): string {
        return ValueConverter.convertToSI(arg);
    }

    public calculateActualResultValue(result: TaskResult): string {
        if (result.type === ResultType.Throughput) {
            return this.valueConverter.convertToSI(result.value / result.time) + result.suffix + '/s';
        }
        return this.valueConverter.convertToSI(result.value) + result.suffix;
    }
}
