import {TaskRunStatistics} from './task-run-statistics';
import {ResultSpecification} from '../task/result-specification';
import {DataSpecification} from '../task/data-specification';
import {Task} from '../task/task';

export class TaskResult extends Task {
    constructor(
        id: number,
        uuid: string,
        name: string,
        description: string,
        result: ResultSpecification,
        input: DataSpecification,
        output: DataSpecification,
        public readonly value: number,
        public readonly time: number,
        public readonly inputSize: number,
        public readonly statistics: TaskRunStatistics
    ) {
        super(id, uuid, name, description, result, input, output);
    }
}
