export class TaskResult {
  constructor(
    public readonly name: string,
    public readonly description: string,
    public readonly value: number,
    public readonly suffix: string,
    public readonly inputSize: number
  ) {
  }
}
