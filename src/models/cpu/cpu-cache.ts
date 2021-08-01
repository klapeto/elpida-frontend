export class CpuCache {
    constructor(
        public readonly name: string,
        public readonly associativity: string,
        public readonly size: number,
        public readonly lineSize: number
    ) {
    }
}
