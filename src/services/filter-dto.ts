export class FilterDto {
    public constructor(public readonly name: string,
                       public readonly value: object | string | number | boolean | null,
                       public readonly comparison: string) {
    }
}
