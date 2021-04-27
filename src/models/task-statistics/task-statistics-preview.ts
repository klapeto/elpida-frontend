import {FoundationModel} from '../foundation-model';
import {ResultType} from '../task/result-specification';

export class TaskStatisticsPreview extends FoundationModel {
    constructor(
        id: number,
        public readonly cpuVendor: string,
        public readonly cpuBrand: string,
        public readonly taskName: string,
        public readonly taskResultUnit: string,
        public readonly cpuCores: number,
        public readonly cpuLogicalCores: number,
        public readonly topologyHash: string,
        public readonly mean: number,
        public readonly sampleSize: number,
        public readonly aggregation: number,
        public readonly type: ResultType,
        public readonly time: number
    ) {
        super(id);
    }
}
