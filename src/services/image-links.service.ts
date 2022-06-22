import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ImageLinksService {

    public constructor() {
    }

    public getCpuImageLink(cpuVendor: string): string {
        return `./assets/cpus/${cpuVendor}.svg`;
    }

    public getBenchmarkImage(benchmarkUuid: string): string {
        return `./assets/benchmarks/${benchmarkUuid}.svg`;
    }

    public getOperatingSystemImageLink(osCategory: string): string {
        return `./assets/oses/${osCategory}.svg`;
    }

    public getElpidaMonochromeAvatarLink(): string {
        return './assets/categories/elpida-versions.svg';
    }
}
