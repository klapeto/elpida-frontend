export enum BenchmarkComparison {
    Lower,
    Greater
}

export class BenchmarkScoreSpecification {
    constructor(
        public readonly unit: string,
        public readonly comparison: BenchmarkComparison
    ) {
    }
}
