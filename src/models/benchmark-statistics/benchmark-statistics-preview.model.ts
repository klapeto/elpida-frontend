import {FoundationModel} from '../foundation.model';
import {BenchmarkComparison} from '../benchmark/benchmark-score-specification.model';

export class BenchmarkStatisticsPreviewModel extends FoundationModel {
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
