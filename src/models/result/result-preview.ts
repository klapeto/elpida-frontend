import {FoundationModel} from '../foundation.model';

export class ResultPreview extends FoundationModel {
    constructor(
        id: number,
        public timeStamp: Date,
        public readonly osName: string,
        public readonly cpuVendor: string,
        public readonly cpuModelName: string,
        public readonly benchmarkUuid: string,
        public readonly benchmarkName: string,
        public readonly benchmarkScoreUnit: string,
        public readonly score: number,
    ) {
        super(id);
    }
}
