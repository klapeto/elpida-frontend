import {Component} from '@angular/core';
import {BenchmarkService} from '../../services/benchmark.service';
import {BenchmarkPreviewModel} from '../../models/benchmark/benchmark-preview.model';
import {ImageLinksService} from '../../services/image-links.service';

@Component({
    selector: 'app-statistics',
    templateUrl: './statistics.component.html',
    styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent {
    public constructor(public readonly benchmarkService: BenchmarkService,
                       public readonly imageLinksService: ImageLinksService) {
    }

    public toItem(context: any): BenchmarkPreviewModel {
        return context as BenchmarkPreviewModel;
    }
}
