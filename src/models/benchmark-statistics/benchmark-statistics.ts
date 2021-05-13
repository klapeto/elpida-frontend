import {Cpu} from '../cpu/cpu';
import {Topology} from '../topology/topology';
import {FoundationModel} from '../foundation-model';
import {Benchmark} from '../benchmark/benchmark';
import {FrequencyClass} from './frequency-class';

export class BenchmarkStatistics extends FoundationModel {
    constructor(
        id: number,
        public readonly cpu: Cpu,
        public readonly benchmark: Benchmark,
        public readonly topology: Topology,
        public readonly sampleSize: number,
        public readonly max: number,
        public readonly min: number,
        public readonly mean: number,
        public readonly standardDeviation: number,
        public readonly tau: number,
        public readonly marginOfError: number,
        public readonly classes: FrequencyClass[]
    ) {
        super(id);
    }
}
