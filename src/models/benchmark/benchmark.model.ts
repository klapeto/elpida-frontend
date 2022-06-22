import {FoundationModel} from '../foundation.model';
import {BenchmarkScoreSpecificationModel} from './benchmark-score-specification.model';
import {BenchmarkTaskModel} from './benchmark-task.model';

export class BenchmarkModel extends FoundationModel {
    public constructor(
        id: number,
        public readonly uuid: string,
        public readonly name: string,
        public readonly scoreSpecification: BenchmarkScoreSpecificationModel,
        public readonly tasks: BenchmarkTaskModel[]
    ) {
        super(id);
    }
}
