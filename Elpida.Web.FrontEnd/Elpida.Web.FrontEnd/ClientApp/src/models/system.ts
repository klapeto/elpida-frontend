import {Cpu} from "./cpu";
import {Topology} from "./topology/topology";
import {Memory} from "./memory";

export class System {
  constructor(
    public readonly cpu: Cpu,
    public readonly topology: Topology,
    public readonly memory: Memory
  ) {
  }
}
