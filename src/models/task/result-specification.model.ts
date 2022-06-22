export enum ResultType {
    Throughput,
    Raw
}

export class ResultSpecificationModel {
    public constructor(
        public readonly name: string,
        public readonly description: string,
        public readonly unit: string,
        public readonly aggregation: number,
        public readonly type: ResultType,
    ) {
    }
}
