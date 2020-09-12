import {CpuNode} from './cpuNode';

export class Topology {
    constructor(
        public readonly totalLogicalCores: number,
        public readonly totalPhysicalCores: number,
        public readonly totalDepth: number,
        public readonly root: CpuNode
    ) {
    }
}
