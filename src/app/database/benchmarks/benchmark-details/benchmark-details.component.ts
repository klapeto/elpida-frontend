import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {BenchmarkModel} from '../../../../models/benchmark/benchmark.model';
import {BenchmarkService} from '../../../../services/benchmark.service';
import {ResultSpecificationModel, ResultType} from '../../../../models/task/result-specification.model';
import {ImageLinksService} from '../../../../services/image-links.service';

@Component({
    selector: 'app-benchmark-details',
    templateUrl: './benchmark-details.component.html',
    styleUrls: ['./benchmark-details.component.css']
})
export class BenchmarkDetailsComponent implements OnInit {

    benchmark: BenchmarkModel;

    constructor(
        private readonly benchmarkService: BenchmarkService,
        public readonly imageLinksService: ImageLinksService,
        private readonly http: HttpClient,
        private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.benchmarkService.getSingle(this.route.snapshot.paramMap.get('id')).subscribe(r => {
            this.benchmark = r;
        }, error => console.error(error));
    }

    getResultUnit(result: ResultSpecificationModel): string {
        return result.type === ResultType.Raw ? result.unit : result.unit + '/s';
    }

}
