import {Elpida} from '../elpida/elpida';
import {System} from './system';
import {FoundationModel} from '../foundation-model';
import {TaskResult} from './task-result';
import {BenchmarkScoreSpecification} from '../benchmark/benchmark-score-specification';

export class Result extends FoundationModel {

    constructor(
        id: number,
        public timeStamp: Date,
        public readonly affinity: number[],
        public readonly elpida: Elpida,
        public readonly system: System,
        public readonly score: number,
        public readonly uuid: string,
        public readonly name: string,
        public readonly taskResults: TaskResult[],
        public readonly scoreSpecification: BenchmarkScoreSpecification
    ) {
        super(id);
    }
}
