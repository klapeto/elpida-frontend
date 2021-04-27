import {Version} from './version';
import {CompilerInfo} from './compiler-info';
import {FoundationModel} from '../foundation-model';

export class Elpida extends FoundationModel {
    constructor(
        id: number,
        public readonly version: Version,
        public readonly compiler: CompilerInfo
    ) {
        super(id);
    }
}