import {TaskStatistics} from './task-statistics';
import {ResultSpecification} from './result-specification';
import {DataSpecification} from './data-specification';

export class TaskResult {
    constructor(
        public readonly id: number,
        public readonly uuid: string,
        public readonly name: string,
        public readonly description: string,
        public readonly result: ResultSpecification,
        public readonly input: DataSpecification,
        public readonly output: DataSpecification,
        public readonly value: number,
        public readonly time: number,
        public readonly inputSize: number,
        public readonly statistics: TaskStatistics
    ) {
    }
}
