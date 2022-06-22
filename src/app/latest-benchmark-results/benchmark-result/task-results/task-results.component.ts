import {Component, Input} from '@angular/core';
import {ValueConverter} from '../../../../services/value-converter';
import {TaskResultModel} from '../../../../models/result/task-result.model';
import {ResultType} from '../../../../models/task/result-specification.model';
import {BenchmarkResultModel} from '../../../../models/result/benchmark-result.model';

@Component({
    selector: 'app-task-results',
    templateUrl: './task-results.component.html',
    styleUrls: ['./task-results.component.css']
})
export class TaskResultsComponent {

    @Input()
    public readonly benchmarkResult: BenchmarkResultModel;

    public selectedResult: TaskResultModel;

    public constructor(public readonly valueConverter: ValueConverter) {

    }

    public calculateActualResultValue(result: TaskResultModel): string {
        if (result.result.type === ResultType.Throughput) {
            return this.valueConverter.toStringSI(result.value / result.time, `${result.result.unit}/s`);
        }
        return this.valueConverter.toStringSI(result.value, result.result.unit);
    }
}
