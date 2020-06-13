import {TaskResult} from "./task-result";

export class BenchmarkResult {
  constructor(
    public readonly benchmarkName: string,
    public readonly affinity: number[],
    public readonly taskResults: TaskResult[]
  ) {
  }
}
