import {CpuCache} from './cpu-cache';
import {ICpuAdditionalInfo} from './icpu-additional-info';

export class Cpu {
    constructor(
        public readonly vendor: string,
        public readonly brand: string,
        public readonly frequency: number,
        public readonly smt: boolean,
        public readonly caches: CpuCache[],
        public readonly features: string[],
        public readonly additionalInfo: ICpuAdditionalInfo
    ) {
    }
}
