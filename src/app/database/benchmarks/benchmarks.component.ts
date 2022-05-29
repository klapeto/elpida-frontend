import {Component} from '@angular/core';
import {BenchmarkService} from '../../../services/benchmark.service';
import {BenchmarkPreviewModel} from '../../../models/benchmark/benchmark-preview.model';
import {ImageLinksService} from '../../../services/image-links.service';

@Component({
    selector: 'app-benchmarks',
    templateUrl: './benchmarks.component.html',
    styleUrls: ['./benchmarks.component.css']
})
export class BenchmarksComponent {

    public constructor(public benchmarkService: BenchmarkService,
                public imageLinksService: ImageLinksService) {
    }

    public toItem(context: any): BenchmarkPreviewModel {
        return context as BenchmarkPreviewModel;
    }

}
