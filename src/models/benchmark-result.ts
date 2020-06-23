import {TaskResult} from './task-result';

export class BenchmarkResult {
  constructor(
    public readonly name: string,
    public readonly taskResults: TaskResult[]
  ) {
  }
}
