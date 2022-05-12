export class OptionModel {
    constructor(public readonly displayName: string,
                public readonly internalName: string = displayName) {
    }
}
