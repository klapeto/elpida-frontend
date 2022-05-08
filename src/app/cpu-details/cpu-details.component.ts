import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Cpu} from '../../models/cpu/cpu';
import {CpuService} from '../../services/cpu.service';
import {FilterModel} from '../../models/filter.model';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-cpu-details',
    templateUrl: './cpu-details.component.html',
    styleUrls: ['./cpu-details.component.css']
})
export class CpuDetailsComponent implements OnInit {

    cpu: Cpu;

    filters: FilterModel[];

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
