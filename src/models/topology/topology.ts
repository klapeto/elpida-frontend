import {CpuNode} from './cpuNode';
import {FoundationModel} from '../foundation-model';

export class Topology extends FoundationModel {
    constructor(
        id: number,
        public readonly totalLogicalCores: number,
        public readonly totalPhysicalCores: number,
        public readonly totalDepth: number,
        public readonly root: CpuNode
    ) {
        super(id);
    }
}
