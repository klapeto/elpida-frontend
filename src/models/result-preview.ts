export class ResultPreview {
  constructor(
    public  id: string,
    public  timeStamp: Date,
    public  elpidaVersionMajor: string,
    public  elpidaVersionMinor: string,
    public  elpidaVersionRevision: string,
    public  elpidaVersionBuild: string,
    public  platformName: string,
    public  platformVersion: string,
    public  cpuBrand: string,
    public  cpuFrequency: number,
    public cpuCores: number,
    public  cpuLogicalCores: number,
    public  memorySize: number
  ) {
  }
}
