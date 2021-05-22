import {CpuNode} from './cpuNode';
import {FoundationModel} from '../foundation-model';

export class Topology extends FoundationModel {
    constructor(
        id: number,
        public readonly cpuId: number,
        public readonly cpuBrand: string,
        public readonly cpuVendor: string,
        public readonly totalLogicalCores: number,
        public readonly totalPhysicalCores: number,
        public readonly totalNumaNodes: number,
        public readonly totalPackages: number,
        public readonly totalMachines: number,
        public readonly totalDepth: number,
        public readonly root: CpuNode
    ) {
        super(id);
    }
}
