import {CpuModel} from '../cpu/cpu.model';
import {TopologyModel} from '../topology/topology.model';
import {FoundationModel} from '../foundation.model';
import {BenchmarkModel} from '../benchmark/benchmark.model';
import {FrequencyClassModel} from './frequency-class.model';

export class BenchmarkStatisticsModel extends FoundationModel {
    constructor(
        id: number,
        public readonly cpu: CpuModel,
        public readonly benchmark: BenchmarkModel,
        public readonly topology: TopologyModel,
        public readonly sampleSize: number,
        public readonly max: number,
        public readonly min: number,
        public readonly mean: number,
        public readonly standardDeviation: number,
        public readonly tau: number,
        public readonly marginOfError: number,
        public readonly classes: FrequencyClassModel[]
    ) {
        super(id);
    }
}
