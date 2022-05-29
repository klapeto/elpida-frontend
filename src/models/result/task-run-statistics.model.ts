export class TaskRunStatisticsModel {
    public constructor(
        public readonly sampleSize: number,
        public readonly max: number,
        public readonly min: number,
        public readonly mean: number,
        public readonly standardDeviation: number,
        public readonly tau: number,
        public readonly marginOfError: number
    ) {
    }
}
