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

    constructor(
        private readonly cpuService: CpuService,
        public readonly imageLinksService: ImageLinksService,
        public readonly valueConverter: ValueConverter,
        private route: ActivatedRoute) {

    }

    public ngOnInit(): void {
        this.cpuService.getSingle(this.route.snapshot.paramMap.get('id')).subscribe(r => {
            this.cpu = r;
        }, error => console.error(error));
    }

}
