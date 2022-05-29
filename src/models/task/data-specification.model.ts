export class DataSpecificationModel {
    constructor(public readonly name: string,
                public readonly description: string,
                public readonly unit: string,
                public readonly RequiredProperties: string[]) {
    }
}
