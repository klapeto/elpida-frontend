import {ElpidaVersionModel} from '../elpida/elpida-version.model';
import {SystemModel} from './system.model';
import {FoundationModel} from '../foundation.model';
import {TaskResultModel} from './task-result.model';
import {BenchmarkScoreSpecificationModel} from '../benchmark/benchmark-score-specification.model';

export class BenchmarkResultModel extends FoundationModel {

    public constructor(
        id: number,
        public timeStamp: Date,
        public readonly affinity: number[],
        public readonly elpidaVersion: ElpidaVersionModel,
        public readonly system: SystemModel,
        public readonly score: number,
        public readonly uuid: string,
        public readonly name: string,
        public readonly taskResults: TaskResultModel[],
        public readonly scoreSpecification: BenchmarkScoreSpecificationModel
    ) {
        super(id);
    }
}
