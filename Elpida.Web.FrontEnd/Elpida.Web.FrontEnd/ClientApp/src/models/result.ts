import {Elpida} from "./elpida";
import {System} from "./system";
import {BenchmarkResult} from "./benchmark-result";

export class Result {
  constructor(
    public readonly elpida: Elpida,
    public readonly system: System,
    public readonly result: BenchmarkResult
  ) {
  }
}
