import {TaskResult} from './task-result';

export class BenchmarkResult {
    constructor(
        public readonly id: number,
        public readonly uuid: string,
        public readonly name: string,
        public readonly taskResults: TaskResult[]
    ) {
    }
}
