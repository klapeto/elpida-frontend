import {FoundationModel} from '../foundation-model';
import {BenchmarkScoreSpecification} from './benchmark-score-specification';
import {Task} from '../task/task';
import {BenchmarkTask} from './benchmark-task';

export class Benchmark extends FoundationModel {
    constructor(
        id: number,
        public readonly uuid: string,
        public readonly name: string,
        public readonly scoreSpecification: BenchmarkScoreSpecification,
        public readonly tasks: BenchmarkTask[]
    ) {
        super(id);
    }
}
