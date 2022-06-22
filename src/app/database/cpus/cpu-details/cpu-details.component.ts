import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CpuModel} from '../../../../models/cpu/cpu.model';
import {CpuService} from '../../../../services/cpu.service';
import {FilterModel} from '../../../../models/filter.model';
import {ImageLinksService} from '../../../../services/image-links.service';
import {ValueConverter} from '../../../../services/value-converter';

@Component({
    selector: 'app-cpu-view-details-details',
    templateUrl: './cpu-details.component.html',
    styleUrls: ['./cpu-details.component.css']
})
export class CpuDetailsComponent implements OnInit {

    public cpu: CpuModel;

    public filters: FilterModel[];

    public constructor(
        public readonly imageLinksService: ImageLinksService,
        public readonly valueConverter: ValueConverter,
        private readonly cpuService: CpuService,
        private readonly route: ActivatedRoute) {

    }

    public async ngOnInit(): Promise<void> {
        this.cpu = await this.cpuService.getSingle(this.route.snapshot.paramMap.get('id'));
    }

}
