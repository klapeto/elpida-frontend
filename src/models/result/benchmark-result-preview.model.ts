import {FoundationModel} from '../foundation.model';

export class BenchmarkResultPreviewModel extends FoundationModel {
    public constructor(
        id: number,
        public timeStamp: string,
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
