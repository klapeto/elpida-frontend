export class TopologyPreview {
    constructor(
        public readonly id: number,
        public readonly cpuId: number,
        public readonly cpuVendor: string,
        public readonly cpuModelName: string,
        public readonly totalLogicalCores: number,
        public readonly totalPhysicalCores: number,
        public readonly totalNumaNodes: number,
        public readonly totalPackages: number,
        public readonly hash: string,
    ) {
    }
}
