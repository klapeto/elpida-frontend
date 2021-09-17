export enum NodeType {
    Machine,
    Package,
    NumaNode,
    Group,
    Die,
    Core,
    L1ICache,
    L1DCache,
    L2ICache,
    L2DCache,
    L3ICache,
    L3DCache,
    L4Cache,
    L5Cache,
    ExecutionUnit,
    Unknown
}

export class CpuNode {
    constructor(public readonly nodeType: NodeType,
                public readonly name: string,
                public readonly osIndex: number,
                public readonly value: number,
                public readonly children: CpuNode[],
                public readonly memoryChildren: CpuNode[]) {
    }
}
