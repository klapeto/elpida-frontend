export class Utilities {
    public static reverseMap(map: object): object {
        const ret = {};
        Object.entries(map).forEach(value => {
            ret[value[1]] = value[0];
        });
        return ret;
    }
}
