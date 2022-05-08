import {FoundationModel} from '../foundation.model';

export class CpuPreview extends FoundationModel {
    constructor(
        id: number,
        public readonly vendor: string,
        public readonly modelName: string
    ) {
        super(id);
    }
}
