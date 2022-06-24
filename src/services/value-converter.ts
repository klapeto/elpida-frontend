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

    public getValueScaleSI(value: number): { value: number, suffix: string } {
        return ValueConverter.getValueScale(value, ValueConverter.ScaleValuesSI, ValueConverter.PrefixesSI);
    }

    public getComponentsSI(value: number, decimals: number = 2): { value: string, suffix: string } {
        return ValueConverter.getValueScaleStringImpl(value, ValueConverter.ScaleValuesSI, ValueConverter.PrefixesSI, decimals);
    }

    public getComponentsIEC(value: number, decimals: number = 2): { value: string, suffix: string } {
        return ValueConverter.getValueScaleStringImpl(value, ValueConverter.ScaleValuesIEC, ValueConverter.PrefixesIEC, decimals);
    }

    public toStringSI(value: number, unit: string | null = '', decimals: number = 2, spaceBetween: boolean = true): string {
        const result = ValueConverter.getValueScaleStringImpl(value, ValueConverter.ScaleValuesSI, ValueConverter.PrefixesSI, decimals);

        return `${result.value}${spaceBetween ? ' ' : ''}${result.suffix}${unit !== null ? unit : ''}`;
    }

    public toStringIEC(value: number, unit: string | null = '', decimals: number = 2, spaceBetween: boolean = true): string {
        const result = ValueConverter.getValueScaleStringImpl(value, ValueConverter.ScaleValuesIEC, ValueConverter.PrefixesIEC, decimals);

        return `${result.value}${spaceBetween ? ' ' : ''}${result.suffix}${unit !== null ? unit : ''}`;
    }

    private static getValueScaleStringImpl(value: number,
                                           denominators: number[],
                                           prefixes: string[],
                                           decimals: number): { value: string, suffix: string } {
        if (value === 0.0) {
            return {value: value.toString(), suffix: ''};
        }

        let i = prefixes.length - 1;
        while (i > 0) {
            if (value >= denominators[i]) {
                break;
            }
            i--;
        }

        const returnValue = (value / denominators[i]);
        let returnString: string;

        if (returnValue - (Math.trunc(returnValue)) > 0.0) {
            returnString = returnValue.toFixed(decimals);
        } else {
            returnString = returnValue.toString();
        }

        return {value: returnString, suffix: prefixes[i]};
    }

    private static getValueScale(value: number, denominators: number[], prefixes: string[]): { value: number, suffix: string } {
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
}
