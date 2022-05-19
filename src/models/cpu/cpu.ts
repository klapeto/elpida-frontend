import {CpuCache} from './cpu-cache';
import {ICpuAdditionalInfo} from './icpu-additional-info';
import {FoundationModel} from '../foundation.model';

export class Cpu extends FoundationModel {
    constructor(
        id: number,
        public readonly architecture: string,
        public readonly vendor: string,
        public readonly modelName: string,
        public readonly frequency: number,
        public readonly smt: boolean,
        public readonly caches: CpuCache[],
        public readonly features: string[],
        public readonly additionalInfo: ICpuAdditionalInfo
    ) {
        super(id);
    }
}
