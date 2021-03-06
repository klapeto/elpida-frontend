import {TaskStatistics} from './task-statistics';
import {TaskOutlier} from './task-outlier';

export enum ResultType {
    Throughput,
    Raw
}

export class TaskResult {
    constructor(
        public readonly name: string,
        public readonly description: string,
        public readonly value: number,
        public readonly time: number,
        public readonly type: ResultType,
        public readonly suffix: string,
        public readonly inputSize: number,
        public readonly statistics: TaskStatistics,
        public readonly outliers: TaskOutlier[]
    ) {
    }
}
