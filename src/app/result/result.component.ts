import {Component, OnInit} from '@angular/core';
import {Result} from '../../models/result/result';
import {ActivatedRoute} from '@angular/router';
import {ResultsService} from '../../services/results.service';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-result',
    templateUrl: './result.component.html',
    styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

    public result: Result;

    constructor(
        private readonly resultsService: ResultsService,
        private readonly http: HttpClient,
        private route: ActivatedRoute) {

    }

    ngOnInit(): void {
        this.resultsService.getSingle(this.route.snapshot.paramMap.get('id')).subscribe(r => {
            this.result = r;
            this.result.timeStamp = new Date(this.result.timeStamp.toString());
            console.log(typeof this.result.timeStamp);
        }, error => console.error(error));
    }
}
