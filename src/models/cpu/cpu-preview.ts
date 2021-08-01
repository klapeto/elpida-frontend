import {FoundationModel} from '../foundation-model';

export class CpuPreview extends FoundationModel {
    constructor(
        id: number,
        public readonly vendor: string,
        public readonly modelName: string,
        public readonly topologiesCount: number,
        public readonly taskStatisticsCount: number
    ) {
        super(id);
    }
}
