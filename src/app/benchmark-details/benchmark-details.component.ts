import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {Benchmark} from '../../models/benchmark/benchmark';
import {BenchmarkService} from '../../services/benchmark.service';
import {ResultSpecification, ResultType} from '../../models/task/result-specification';

@Component({
    selector: 'app-benchmark-details',
    templateUrl: './benchmark-details.component.html',
    styleUrls: ['./benchmark-details.component.css']
})
export class BenchmarkDetailsComponent implements OnInit {

    benchmark: Benchmark;

    constructor(
        private readonly benchmarkService: BenchmarkService,
        private readonly http: HttpClient,
        private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.benchmarkService.getSingle(this.route.snapshot.paramMap.get('id')).subscribe(r => {
            this.benchmark = r;
        }, error => console.error(error));
    }

    getResultUnit(result: ResultSpecification): string {
        return result.type === ResultType.Raw ? result.unit : result.unit + '/s';
    }

}
