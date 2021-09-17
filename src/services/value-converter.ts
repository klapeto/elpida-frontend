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

    private static getValueScaleStringImpl(value: number, denominators: number[], prefixes: string[], decimals: number): { value, suffix: string } {
        if (value === 0) {
            return {value: value.toString(), suffix: ''};
        }
        let i = prefixes.length - 1;
        while (i > 0) {
            if (value >= denominators[i]) {
                break;
            }
            i--;
        }
        return {value: (value / denominators[i]).toFixed(decimals), suffix: prefixes[i]};
    }

    private static getValueScale(value: number, denominators: number[], prefixes: string[]): { value, suffix: string } {
        if (value === 0) {
            return {value: 1, suffix: ''};
        }
        let i = prefixes.length - 1;
        while (i > 0) {
            if (value >= denominators[i]) {
                break;
            }
            i--;
        }
        return {value: denominators[i], suffix: prefixes[i]};
    }

    public getValueScaleSI(value: number): { value, suffix: string } {
        return ValueConverter.getValueScale(value, ValueConverter.ScaleValuesSI, ValueConverter.PrefixesSI);
    }

    public static convertToSI(value: number, decimals: number = 2): string {
        const result = ValueConverter.getValueScaleStringImpl(value, ValueConverter.ScaleValuesSI, ValueConverter.PrefixesSI, decimals);

        return result.value + result.suffix;
    }

    public convertToSI(value: number, decimals: number = 2): string {
        const result = ValueConverter.getValueScaleStringImpl(value, ValueConverter.ScaleValuesSI, ValueConverter.PrefixesSI, decimals);

        return result.value + result.suffix;
    }

    public getToSI(value: number, decimals: number = 2): { value, suffix: string } {
        return ValueConverter.getValueScaleStringImpl(value, ValueConverter.ScaleValuesSI, ValueConverter.PrefixesSI, decimals);
    }

    public getToIEC(value: number, decimals: number = 2): { value, suffix: string } {
        return ValueConverter.getValueScaleStringImpl(value, ValueConverter.ScaleValuesIEC, ValueConverter.PrefixesIEC, decimals);
    }

    public convertToIEC(value: number, decimals: number = 2): string {
        const result = ValueConverter.getValueScaleStringImpl(value, ValueConverter.ScaleValuesIEC, ValueConverter.PrefixesIEC, decimals);

        return result.value + result.suffix;
    }

    public getStringValueSI(value: number, unit: string , decimals: number = 2): string {
        const result = ValueConverter.getValueScaleStringImpl(value, ValueConverter.ScaleValuesSI, ValueConverter.PrefixesSI, decimals);

        return result.value + ' ' + result.suffix + unit;
    }

    public getStringValueIEC(value: number, unit: string , decimals: number = 2): string {
        const result = ValueConverter.getValueScaleStringImpl(value, ValueConverter.ScaleValuesIEC, ValueConverter.PrefixesIEC, decimals);

        return result.value + ' ' + result.suffix + unit;
    }
}
