import {TaskResult} from './task-result';
import {FoundationModel} from '../foundation-model';

export class BenchmarkResult extends FoundationModel {
    constructor(
        id: number,
        public readonly uuid: string,
        public readonly name: string,
        public readonly taskResults: TaskResult[]
    ) {
        super(id);
    }
}
