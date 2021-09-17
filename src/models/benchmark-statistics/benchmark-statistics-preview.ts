import {FoundationModel} from '../foundation-model';
import {ResultType} from '../task/result-specification';
import {BenchmarkComparison} from '../benchmark/benchmark-score-specification';

export class BenchmarkStatisticsPreview extends FoundationModel {
    constructor(
        id: number,
        public readonly cpuVendor: string,
        public readonly cpuModelName: string,
        public readonly benchmarkName: string,
        public readonly benchmarkUuid: string,
        public readonly benchmarkScoreUnit: string,
        public readonly topologyLogicalCores: number,
        public readonly topologyPhysicalCores: number,
        public readonly topologyNumaNodes: number,
        public readonly topologyPackages: number,
        public readonly topologyHash: string,
        public readonly mean: number,
        public readonly sampleSize: number,
        public readonly comparison: BenchmarkComparison,
    ) {
        super(id);
    }
}
