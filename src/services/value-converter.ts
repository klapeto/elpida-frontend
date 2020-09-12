import {Injectable} from '@angular/core';

@Injectable()
export class ValueConverter {

    public static readonly PrefixesSI: string[] = [
        'p',
        'n',
        'μ',
        'm',
        '',
        'K',
        'M',
        'G',
        'T',
        'P',
        'E',
        'Z',
        'Y'
    ];

    public static readonly PrefixesIEC: string[] = [
        '',
        'Ki',
        'Mi',
        'Gi',
        'Ti',
        'Pi',
        'Ei',
        'Zi',
        'Yi'
    ];

    public static readonly ScaleValuesSI: number[] = [
        1.0 / 1000.0 / 1000.0 / 1000.0 / 1000.0,
        1.0 / 1000.0 / 1000.0 / 1000.0,
        1.0 / 1000.0 / 1000.0,
        1.0 / 1000.0,
        1.0,
        1000.0,
        1000.0 * 1000.0,
        1000.0 * 1000.0 * 1000.0,
        1000.0 * 1000.0 * 1000.0 * 1000.0,
        1000.0 * 1000.0 * 1000.0 * 1000.0 * 1000.0,
        1000.0 * 1000.0 * 1000.0 * 1000.0 * 1000.0 * 1000.0,
        1000.0 * 1000.0 * 1000.0 * 1000.0 * 1000.0 * 1000.0 * 1000.0,
        1000.0 * 1000.0 * 1000.0 * 1000.0 * 1000.0 * 1000.0 * 1000.0 * 1000.0
    ];

    public static readonly ScaleValuesIEC: number[] = [
        1.0,
        1024.0,
        1024.0 * 1024.0,
        1024.0 * 1024.0 * 1024.0,
        1024.0 * 1024.0 * 1024.0 * 1024.0,
        1024.0 * 1024.0 * 1024.0 * 1024.0 * 1024.0,
        1024.0 * 1024.0 * 1024.0 * 1024.0 * 1024.0 * 1024.0,
        1024.0 * 1024.0 * 1024.0 * 1024.0 * 1024.0 * 1024.0 * 1024.0,
        1024.0 * 1024.0 * 1024.0 * 1024.0 * 1024.0 * 1024.0 * 1024.0 * 1024.0
    ];

    public static readonly SIDenominator = 1000.0;
    public static readonly IECDenominator = 1024.0;

    private static getValueScaleStringImpl(value: number, denominators: number[], prefixes: string[], decimals: number): string {
        if (value === 0) {
            return value.toString();
        }
        let i = prefixes.length - 1;
        while (i > 0) {
            if (value >= denominators[i]) {
                break;
            }
            i--;
        }
        return (value / denominators[i]).toFixed(decimals) + prefixes[i];
    }

    public convertToSI(value: number, decimals: number = 2): string {
        return ValueConverter.getValueScaleStringImpl(value, ValueConverter.ScaleValuesSI, ValueConverter.PrefixesSI, decimals);
    }

    public convertToIEC(value: number, decimals: number = 2): string {
        return ValueConverter.getValueScaleStringImpl(value, ValueConverter.ScaleValuesIEC, ValueConverter.PrefixesIEC, decimals);
    }
}
