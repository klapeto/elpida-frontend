import {CpuModel} from '../cpu/cpu.model';
import {TopologyModel} from '../topology/topology.model';
import {MemoryModel} from './memory.model';
import {OperatingSystemModel} from '../operating-system.model';
import {TimingModel} from './timing.model';

export class SystemModel {
    constructor(
        public readonly os: OperatingSystemModel,
        public readonly cpu: CpuModel,
        public readonly topology: TopologyModel,
        public readonly memory: MemoryModel,
        public readonly timing: TimingModel
    ) {
    }
}
