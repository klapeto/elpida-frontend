import {CpuCache} from './cpu-cache';

export class Cpu {
  constructor(
    public readonly vendor: string,
    public readonly brand: string,
    public readonly model: number,
    public readonly family: number,
    public readonly stepping: number,
    public readonly frequency: number,
    public readonly turboBoost: boolean,
    public readonly turboBoost3: boolean,
    public readonly smt: boolean,
    public readonly caches: CpuCache[],
    public readonly features: string[],
  ) {
  }
}
