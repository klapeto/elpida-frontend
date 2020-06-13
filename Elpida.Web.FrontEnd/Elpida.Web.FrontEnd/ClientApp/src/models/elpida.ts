import {Version} from "./version";
import {Platform} from "./platform";

export class Elpida {
  constructor(
    public readonly version: Version,
    public readonly platform: Platform
  ) {
  }
}
