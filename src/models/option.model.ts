export class OptionModel {
    public constructor(public readonly displayName: string,
                public readonly internalName: string = displayName) {
    }
}
