import {FoundationModel} from '../foundation-model';
import {BenchmarkScoreSpecification} from './benchmark-score-specification';
import {Task} from '../task/task';

export class Benchmark extends FoundationModel {
    constructor(
        id: number,
        public readonly uuid: string,
        public readonly name: string,
        public readonly scoreSpecification: BenchmarkScoreSpecification,
        public readonly taskSpecifications: Task[]
    ) {
        super(id);
    }
}
