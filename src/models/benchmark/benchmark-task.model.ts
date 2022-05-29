import {TaskModel} from '../task/task.model';

export class BenchmarkTaskModel {
    constructor(
        public readonly uuid: string,
        public readonly task: TaskModel,
        public readonly canBeMultiThreaded: boolean,
        public readonly canBeDisabled: boolean,
        public readonly iterationsToRun: number,
        public readonly isCountedOnResults: boolean
    ) {
    }
}
