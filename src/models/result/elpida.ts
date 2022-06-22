import {Version} from './version';
import {CompilerInfo} from './compiler-info';

export class Elpida {
    constructor(
        public readonly version: Version,
        public readonly compiler: CompilerInfo
    ) {
    }
}
