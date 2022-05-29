import {FoundationModel} from '../foundation.model';

export class CpuPreviewModel extends FoundationModel {
    constructor(
        id: number,
        public readonly vendor: string,
        public readonly modelName: string
    ) {
        super(id);
    }
}
