import {FoundationModel} from '../foundation.model';

export class CpuPreviewModel extends FoundationModel {
    public constructor(
        id: number,
        public readonly vendor: string,
        public readonly modelName: string
    ) {
        super(id);
    }
}
