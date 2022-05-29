export enum BenchmarkComparison {
    Lower,
    Greater
}

export class BenchmarkScoreSpecificationModel {
    public constructor(
        public readonly unit: string,
        public readonly comparison: BenchmarkComparison
    ) {
    }
}
