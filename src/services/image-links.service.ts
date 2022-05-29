import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ImageLinksService {

    constructor() {
    }

    public getCpuImageLink(cpuVendor: string) {
        return `./assets/cpus/${cpuVendor}.svg`;
    }

    public getBenchmarkImage(benchmarkUuid: string) {
        return `./assets/benchmarks/${benchmarkUuid}.svg`;
    }

    public getOperatingSystemImageLink(osCategory: string) {
        return `./assets/oses/${osCategory}.svg`;
    }

    public getElpidaMonochromeAvatarLink() {
        return './assets/categories/elpida-versions.svg';
    }
}
