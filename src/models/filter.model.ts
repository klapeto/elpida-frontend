export abstract class FilterModel {

    protected constructor(public readonly title: string,
                          public readonly internalName: string) {
    }

    public abstract reset(): void;

    public abstract isSet(): boolean;
}
