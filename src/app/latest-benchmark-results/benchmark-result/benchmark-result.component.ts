import {AfterViewInit, Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {BenchmarkResultModel} from '../../../models/result/benchmark-result.model';
import {ActivatedRoute} from '@angular/router';
import {BenchmarkResultsService} from '../../../services/benchmark-results.service';
import {HttpClient} from '@angular/common/http';
import {ImageLinksService} from '../../../services/image-links.service';
import {ValueConverter} from '../../../services/value-converter';
import {TabModel} from '../../../models/tab.model';

@Component({
    selector: 'app-benchmark-result',
    templateUrl: './benchmark-result.component.html',
    styleUrls: ['./benchmark-result.component.css']
})
export class BenchmarkResultComponent implements OnInit, AfterViewInit {

    public result: BenchmarkResultModel;

    @ViewChild('summaryTitle') public summaryTitle: TemplateRef<any>;
    @ViewChild('summaryContent') public summaryContent: TemplateRef<any>;
    @ViewChild('cpuTitle') public cpuTitle: TemplateRef<any>;
    @ViewChild('cpuContent') public cpuContent: TemplateRef<any>;
    @ViewChild('topologyTitle') public topologyTitle: TemplateRef<any>;
    @ViewChild('topologyContent') public topologyContent: TemplateRef<any>;
    @ViewChild('osTitle') public osTitle: TemplateRef<any>;
    @ViewChild('osContent') public osContent: TemplateRef<any>;
    @ViewChild('elpidaTitle') public elpidaTitle: TemplateRef<any>;
    @ViewChild('elpidaContent') public elpidaContent: TemplateRef<any>;
    @ViewChild('taskResultsTitle') public taskResultsTitle: TemplateRef<any>;
    @ViewChild('taskResultsContent') public taskResultsContent: TemplateRef<any>;

    public tabs: TabModel[];

    constructor(
        private readonly resultsService: BenchmarkResultsService,
        private readonly http: HttpClient,
        public readonly imageLinksService: ImageLinksService,
        public readonly valueConverter: ValueConverter,
        private route: ActivatedRoute) {

    }

    public ngOnInit(): void {
        this.resultsService.getSingle(this.route.snapshot.paramMap.get('id')).subscribe(r => {
            this.result = r;
            this.result.timeStamp = new Date(this.result.timeStamp.toString());
        }, error => console.error(error));
    }

    public ngAfterViewInit(): void {
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
