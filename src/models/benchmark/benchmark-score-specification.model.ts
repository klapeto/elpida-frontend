export enum BenchmarkComparison {
    Lower,
    Greater
}

export class BenchmarkScoreSpecificationModel {
    constructor(
        public readonly unit: string,
        public readonly comparison: BenchmarkComparison
    ) {
    }
}
