import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {BenchmarkResult} from '../../../models/result/benchmark-result';
import {ValueConverter} from '../../../services/value-converter';
import {TaskResult} from '../../../models/result/task-result';
import {ModalService} from '../../../services/modal.service';
import {ResultDetailsComponent} from '../result-details/result-details.component';
import {ResultType} from '../../../models/result/result-specification';

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

    constructor(public valueConverter: ValueConverter,
                public el: ElementRef,
                private modalService: ModalService) {

    }

    ngOnInit() {
        const first = this.benchmarkResult.taskResults[0];
        this.useLineChart = this.benchmarkResult.taskResults.length > 1
            && this.benchmarkResult.taskResults.every(x => x.name === first.name && x.result.type === first.result.type);

        if (this.useLineChart) {

            this.yAxisLabel = first.name;
            this.yAxisUnit = first.result.unit;
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

    public onRecordClick(result: TaskResult): void {
        this.modalService.show<ResultDetailsComponent>(
            'Result details', ResultDetailsComponent, component => component.taskResult = result);
    }

    public formatNumberSI(arg: number): string {
        return ValueConverter.convertToSI(arg);
    }

    public calculateActualResultValue(result: TaskResult): string {
        if (result.result.type === ResultType.Throughput) {
            return this.valueConverter.convertToSI(result.value / result.time) + result.result.unit + '/s';
        }
        return this.valueConverter.convertToSI(result.value) + result.result.unit;
    }
}
