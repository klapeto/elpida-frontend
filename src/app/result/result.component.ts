import {AfterViewInit, Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {Result} from '../../models/result/result';
import {ActivatedRoute} from '@angular/router';
import {ResultsService} from '../../services/results.service';
import {HttpClient} from '@angular/common/http';
import {ImageLinksService} from '../../services/image-links.service';
import {ValueConverter} from '../../services/value-converter';
import {TabModel} from '../../models/tab.model';

@Component({
    selector: 'app-result',
    templateUrl: './result.component.html',
    styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit, AfterViewInit {

    public result: Result;

    @ViewChild('summaryTitle') summaryTitle: TemplateRef<any>;
    @ViewChild('summaryContent') summaryContent: TemplateRef<any>;
    @ViewChild('cpuTitle') cpuTitle: TemplateRef<any>;
    @ViewChild('cpuContent') cpuContent: TemplateRef<any>;
    @ViewChild('topologyTitle') topologyTitle: TemplateRef<any>;
    @ViewChild('topologyContent') topologyContent: TemplateRef<any>;

    tabs: TabModel[];

    constructor(
        private readonly resultsService: ResultsService,
        private readonly http: HttpClient,
        public readonly imageLinksService: ImageLinksService,
        public readonly valueConverter: ValueConverter,
        private route: ActivatedRoute) {

    }

    ngOnInit(): void {
        this.resultsService.getSingle(this.route.snapshot.paramMap.get('id')).subscribe(r => {
            this.result = r;
            this.result.timeStamp = new Date(this.result.timeStamp.toString());
        }, error => console.error(error));
    }

    ngAfterViewInit(): void {
        this.tabs = [
            new TabModel(this.summaryTitle, this.summaryContent),
            new TabModel(this.cpuTitle, this.cpuContent),
            new TabModel(this.topologyTitle, this.topologyContent),
        ];
    }
}
