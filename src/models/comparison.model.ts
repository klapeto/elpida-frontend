export class ComparisonModel {
    private constructor(public displayName: string, public internalName: string) {
    }

    public static equals(): ComparisonModel {
        return new ComparisonModel('equals to', 'equals');
    }

    public static notEqual(): ComparisonModel {
        return new ComparisonModel('is not equal to', 'not-equal');
    }

    public static contains(): ComparisonModel {
        return new ComparisonModel('contains', 'contain');
    }

    public static notContain(): ComparisonModel {
        return new ComparisonModel('does not contain', 'not-contain');
    }

    public static greater(): ComparisonModel {
        return new ComparisonModel('is greater to', 'greater');
    }

    public static greaterEqual(): ComparisonModel {
        return new ComparisonModel('is greater or equal to', 'greater-equal');
    }

    public static less(): ComparisonModel {
        return new ComparisonModel('is less than', 'less');
    }

    public static lessEqual(): ComparisonModel {
        return new ComparisonModel('is less or equal than', 'less-equal');
    }
}
