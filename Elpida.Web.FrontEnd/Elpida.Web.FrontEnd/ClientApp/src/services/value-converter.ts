import {Injectable} from "@angular/core";

@Injectable()
export class ValueConverter {

  public static PrefixesSI: string[] = [
    "p",
    "n",
    "μ",
    "m",
    "",
    "K",
    "M",
    "G",
    "T",
    "P",
    "E",
    "Z",
    "Y"
  ];

  public static PrefixesIEC: string[] = [
    "",
    "Ki",
    "Mi",
    "Gi",
    "Ti",
    "Pi",
    "Ei",
    "Zi",
    "Yi"
  ];

  public static ScaleValuesSI: number[] = [
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

  public static ScaleValuesIEC: number[] = [
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

  public static SIDenominator: number = 1000.0;
  public static IECDenominator: number = 1024.0;

  public convertToSI(value: number, decimals: number = 2): string {
    return ValueConverter.getValueScaleStringImpl(value, ValueConverter.ScaleValuesSI, ValueConverter.PrefixesSI, decimals);
  }

  public convertToIEC(value: number, decimals: number = 2): string {
    return ValueConverter.getValueScaleStringImpl(value, ValueConverter.ScaleValuesIEC, ValueConverter.PrefixesIEC, decimals);
  }

  private static getValueScaleStringImpl(value: number, denominators: number[], prefixes: string[], decimals: number): string {
    let i = prefixes.length - 1;
    while (i > 0) {
      if (value >= denominators[i]) {
        break;
      }
      i--;
    }
    return (value / denominators[i]).toFixed(decimals) + prefixes[i];
  }
}
