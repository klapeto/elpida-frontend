import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Cpu} from '../../models/cpu/cpu';
import {CpuService} from '../../services/cpu.service';
import {BenchmarkStatisticsService} from '../../services/benchmark-statistics.service';
import {Filter} from '../../models/filter';
import {NumberComparisons, NumberFilter} from '../../models/filters/number-filter';
import {CpuBenchmarkStatisticsService} from '../../services/cpu-benchmark-statistics.service';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-cpu-details',
    templateUrl: './cpu-details.component.html',
    styleUrls: ['./cpu-details.component.css']
})
export class CpuDetailsComponent implements OnInit {

    cpu: Cpu;

    filters: Filter[];

    constructor(
        private readonly cpuService: CpuService,
        private readonly http: HttpClient,
        private readonly router: Router) {
        const tokens = this.router.url.split('/');
        cpuService.getSingle(tokens[tokens.length - 1]).subscribe(r => {
            this.filters = [new NumberFilter('Cpu Id', 'cpuId', true, NumberComparisons.Equal, '', r.id)];
            this.cpu = r;
        }, error => console.error(error));
    }

    ngOnInit(): void {
    }

}
