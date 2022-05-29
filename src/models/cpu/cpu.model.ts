import {CpuCacheModel} from './cpu-cache.model';
import {ICpuAdditionalInfo} from './icpu-additional-info';
import {FoundationModel} from '../foundation.model';

export class CpuModel extends FoundationModel {
    public constructor(
        id: number,
        public readonly architecture: string,
        public readonly vendor: string,
        public readonly modelName: string,
        public readonly frequency: number,
        public readonly smt: boolean,
        public readonly caches: CpuCacheModel[],
        public readonly features: string[],
        public readonly additionalInfo: ICpuAdditionalInfo
    ) {
        super(id);
    }
}
