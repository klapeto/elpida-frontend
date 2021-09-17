import {Task} from '../task/task';

export class BenchmarkTask {
    constructor(
        public readonly uuid: string,
        public readonly task: Task,
        public readonly canBeMultiThreaded: boolean,
        public readonly canBeDisabled: boolean,
        public readonly iterationsToRun: number,
        public readonly isCountedOnResults: boolean
    ) {
    }
}
