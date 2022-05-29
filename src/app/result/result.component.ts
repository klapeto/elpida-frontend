import {AfterViewInit, Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {BenchmarkResultModel} from '../../models/result/benchmark-result.model';
import {ActivatedRoute} from '@angular/router';
import {BenchmarkResultsService} from '../../services/benchmark-results.service';
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

    public result: BenchmarkResultModel;

    @ViewChild('summaryTitle') summaryTitle: TemplateRef<any>;
    @ViewChild('summaryContent') summaryContent: TemplateRef<any>;
    @ViewChild('cpuTitle') cpuTitle: TemplateRef<any>;
    @ViewChild('cpuContent') cpuContent: TemplateRef<any>;
    @ViewChild('topologyTitle') topologyTitle: TemplateRef<any>;
    @ViewChild('topologyContent') topologyContent: TemplateRef<any>;
    @ViewChild('osTitle') osTitle: TemplateRef<any>;
    @ViewChild('osContent') osContent: TemplateRef<any>;
    @ViewChild('elpidaTitle') elpidaTitle: TemplateRef<any>;
    @ViewChild('elpidaContent') elpidaContent: TemplateRef<any>;
    @ViewChild('taskResultsTitle') taskResultsTitle: TemplateRef<any>;
    @ViewChild('taskResultsContent') taskResultsContent: TemplateRef<any>;


    tabs: TabModel[];

    constructor(
        private readonly resultsService: BenchmarkResultsService,
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
            new TabModel(this.osTitle, this.osContent),
            new TabModel(this.elpidaTitle, this.elpidaContent),
            new TabModel(this.taskResultsTitle, this.taskResultsContent),
        ];
    }
}
