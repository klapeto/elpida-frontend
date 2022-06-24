export enum ResultType {
    Throughput,
    Raw
}

export enum AggregationType {
    Accumulative,
    Average
}

export class ResultSpecificationModel {
    public constructor(
        public readonly name: string,
        public readonly description: string,
        public readonly unit: string,
        public readonly aggregation: AggregationType,
        public readonly type: ResultType,
    ) {
    }
}
