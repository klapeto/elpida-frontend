export class ResultPreview {
    constructor(
        public readonly id: string,
        public timeStamp: Date,
        public readonly elpidaVersionMajor: string,
        public readonly elpidaVersionMinor: string,
        public readonly elpidaVersionRevision: string,
        public readonly elpidaVersionBuild: string,
        public readonly platformName: string,
        public readonly platformVersion: string,
        public readonly cpuBrand: string,
        public readonly cpuFrequency: number,
        public readonly cpuCores: number,
        public readonly cpuLogicalCores: number,
        public readonly memorySize: number,
        public readonly name: string
    ) {
    }
}
