/* tslint:disable:member-ordering */
export class ComparisonModel {

    private constructor(public displayName: string, public internalName: string) {
    }

    public static equals(): ComparisonModel {
        return new ComparisonModel('=', 'equal');
    }

    public static notEqual(): ComparisonModel {
        return new ComparisonModel('!=', 'not-equal');
    }

    public static contains(): ComparisonModel {
        return new ComparisonModel('contains', 'contain');
    }

    public static notContain(): ComparisonModel {
        return new ComparisonModel('not contain', 'not-contain');
    }

    public static greater(): ComparisonModel {
        return new ComparisonModel('>', 'greater');
    }

    public static greaterEqual(): ComparisonModel {
        return new ComparisonModel('>=', 'greater-equal');
    }

    public static less(): ComparisonModel {
        return new ComparisonModel('<', 'less');
    }

    public static lessEqual(): ComparisonModel {
        return new ComparisonModel('=<', 'less-equal');
    }

    public static mapToInternalNames: IComparisonsMap = {
        [ComparisonModel.equals().internalName]: () => ComparisonModel.equals(),
        [ComparisonModel.notEqual().internalName]: () => ComparisonModel.notEqual(),
        [ComparisonModel.contains().internalName]: () => ComparisonModel.contains(),
        [ComparisonModel.notContain().internalName]: () => ComparisonModel.notContain(),
        [ComparisonModel.greater().internalName]: () => ComparisonModel.greater(),
        [ComparisonModel.greaterEqual().internalName]: () => ComparisonModel.greaterEqual(),
        [ComparisonModel.less().internalName]: () => ComparisonModel.less(),
        [ComparisonModel.lessEqual().internalName]: () => ComparisonModel.lessEqual()
    };
}

interface IComparisonsMap {
    [name: string]: () => ComparisonModel;
}
