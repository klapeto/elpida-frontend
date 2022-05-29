import {FoundationModel} from './foundation.model';

export class OperatingSystemModel extends FoundationModel {
    public constructor(
        id: number,
        public readonly category: string,
        public readonly name: string,
        public readonly version: string
    ) {
        super(id);
    }
}
