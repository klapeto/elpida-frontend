import {FoundationModel} from '../foundation-model';

export class ResultPreview extends FoundationModel {
    constructor(
        id: number,
        public timeStamp: Date,
        public readonly elpidaVersionMajor: string,
        public readonly elpidaVersionMinor: string,
        public readonly elpidaVersionRevision: string,
        public readonly elpidaVersionBuild: string,
        public readonly osName: string,
        public readonly osVersion: string,
        public readonly cpuVendor: string,
        public readonly cpuModelName: string,
        public readonly cpuFrequency: number,
        public readonly cpuCores: number,
        public readonly cpuLogicalCores: number,
        public readonly memorySize: number,
        public readonly benchmarkUuid: string,
        public readonly benchmarkName: string
    ) {
        super(id);
    }
}
