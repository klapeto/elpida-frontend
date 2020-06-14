import {TaskResult} from "./task-result";

export class BenchmarkResult {
  constructor(
    public readonly benchmarkName: string,
    public readonly taskResults: TaskResult[]
  ) {
  }
}
