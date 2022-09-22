import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {BenchmarkModel} from '../../../../models/benchmark/benchmark.model';
import {BenchmarkService} from '../../../../services/benchmark.service';
import {ImageLinksService} from '../../../../services/image-links.service';

@Component({
    selector: 'app-benchmark-details',
    templateUrl: './benchmark-details.component.html',
    styleUrls: ['./benchmark-details.component.css']
})
export class BenchmarkDetailsComponent implements OnInit {

    public benchmark: BenchmarkModel;

    public constructor(
        public readonly imageLinksService: ImageLinksService,
        private readonly benchmarkService: BenchmarkService,
        private readonly http: HttpClient,
        private readonly route: ActivatedRoute) {
    }

    public async ngOnInit(): Promise<void> {
        this.route.params.subscribe(async p => {
            this.benchmark = await this.benchmarkService.getSingle(p['id']);
        });
    }
}
