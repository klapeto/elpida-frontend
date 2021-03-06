export class TaskStatistics {

    constructor(
        public readonly sampleSize: number,
        public readonly max: number,
        public readonly min: number,
        public readonly mean: number,
        public readonly sd: number,
        public readonly tau: number,
        public readonly marginOfError: number
    ) {
    }
}
