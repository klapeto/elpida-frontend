import {Component, Input, OnInit} from '@angular/core';
import {ValueConverter} from '../../../services/value-converter';
import {TaskResult} from '../../../models/result/task-result';
import {ResultType} from '../../../models/task/result-specification';
import {Result} from '../../../models/result/result';

@Component({
    selector: 'app-task-results',
    templateUrl: './task-results.component.html',
    styleUrls: ['./task-results.component.css']
})
export class TaskResultsComponent implements OnInit {

    @Input() public readonly benchmarkResult: Result;

    selectedResult: TaskResult;

    constructor(public valueConverter: ValueConverter) {

    }

    ngOnInit() {

    }

    public calculateActualResultValue(result: TaskResult): string {
        if (result.result.type === ResultType.Throughput) {
            return this.valueConverter.toStringSI(result.value / result.time, `${result.result.unit}/s`);
        }
        return this.valueConverter.toStringSI(result.value, result.result.unit);
    }
}
