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

    constructor(
        private readonly benchmarkService: BenchmarkService,
        public readonly imageLinksService: ImageLinksService,
        private readonly http: HttpClient,
        private route: ActivatedRoute) {
    }

    public ngOnInit(): void {
        this.benchmarkService.getSingle(this.route.snapshot.paramMap.get('id')).subscribe(r => {
            this.benchmark = r;
        }, error => console.error(error));
    }

}
