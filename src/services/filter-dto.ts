export class FilterDto {
    constructor(public readonly name: string,
                public readonly value: any,
                public readonly comparison: string) {
    }
}
