import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
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
        private route: ActivatedRoute) {

    }

    ngOnInit(): void {
        this.cpuService.getSingle(this.route.snapshot.paramMap.get('id')).subscribe(r => {
            this.cpu = r;
        }, error => console.error(error));
    }

}
