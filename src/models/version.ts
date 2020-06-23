export class Version {
  constructor(
    public readonly major: number,
    public readonly minor: number,
    public readonly revision: number,
    public readonly build: number
  ) {
  }
}
