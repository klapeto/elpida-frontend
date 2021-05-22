import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
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
        private readonly router: Router) {
        const tokens = this.router.url.split('/');
        benchmarkService.getSingle(tokens[tokens.length - 1]).subscribe(r => {
            this.benchmark = r;
        }, error => console.error(error));
    }

    ngOnInit(): void {
    }

    getResultUnit(result: ResultSpecification): string {
        return result.type === ResultType.Raw ? result.unit : result.unit + '/s';
    }

}
