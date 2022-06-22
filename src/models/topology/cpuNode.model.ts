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

export class CpuNodeModel {
    public constructor(public readonly nodeType: NodeType,
                public readonly name: string,
                public readonly osIndex: number | null,
                public readonly value: number | null,
                public readonly children: CpuNodeModel[],
                public readonly memoryChildren: CpuNodeModel[]) {
    }
}
