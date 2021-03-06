import {Cpu} from './cpu';
import {Topology} from './topology/topology';
import {Memory} from './memory';
import {Os} from './os';
import {Timing} from './timing';

export class System {
    constructor(
        public readonly os: Os,
        public readonly cpu: Cpu,
        public readonly topology: Topology,
        public readonly memory: Memory,
        public readonly timing: Timing
    ) {
    }
}
