import {VersionModel} from './version.model';
import {CompilerInfoModel} from './compiler-info.model';
import {FoundationModel} from '../foundation.model';

export class ElpidaVersionModel extends FoundationModel {
    public constructor(
        id: number,
        public readonly version: VersionModel,
        public readonly compiler: CompilerInfoModel
    ) {
        super(id);
    }
}
