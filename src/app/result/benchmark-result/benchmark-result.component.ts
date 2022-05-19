import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {BenchmarkResult} from '../../../models/result/benchmark-result';
import {ValueConverter} from '../../../services/value-converter';
import {TaskResult} from '../../../models/result/task-result';
import {ModalService} from '../../../services/modal.service';
import {ResultDetailsComponent} from '../result-details/result-details.component';
import {ResultType} from '../../../models/task/result-specification';
import {Result} from '../../../models/result/result';

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

    @Input() public readonly benchmarkResult: Result;

    constructor(public valueConverter: ValueConverter,
                public el: ElementRef,
                private modalService: ModalService) {

    }

    ngOnInit() {
        const first = this.benchmarkResult.taskResults[0];
        this.useLineChart = this.benchmarkResult.taskResults.length > 1
            && this.benchmarkResult.taskResults.every(x => x.result.unit === first.result.unit && x.result.type === first.result.type);

        if (this.useLineChart) {

            this.yAxisLabel = first.result.name;
            this.yAxisUnit = first.result.unit;
            this.data = [
                {
                    'name': this.benchmarkResult.name,
                    'series': this.benchmarkResult.taskResults.map(r => {
                        return {
                            'name': this.valueConverter.toStringSI(r.inputSize),
                            'value': r.value
                        };
                    })
                }
            ];
        }
    }

    public onRecordClick(result: TaskResult): void {
        this.modalService.show<ResultDetailsComponent>(
            'Result details', ResultDetailsComponent, component => component.taskResult = result);
    }

    public formatNumberSI(arg: number): string {
        return this.valueConverter.toStringSI(arg);
    }

    public calculateActualResultValue(result: TaskResult): string {
        if (result.result.type === ResultType.Throughput) {
            return this.valueConverter.toStringSI(result.value / result.time, `${result.result.unit}/s`);
        }
        return this.valueConverter.toStringSI(result.value, result.result.unit);
    }
}
