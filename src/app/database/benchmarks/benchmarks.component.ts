import {Component} from '@angular/core';
import {BenchmarkService} from '../../../services/benchmark.service';
import {BenchmarkPreview} from '../../../models/benchmark/benchmark-preview';
import {ImageLinksService} from '../../../services/image-links.service';

@Component({
    selector: 'app-benchmarks',
    templateUrl: './benchmarks.component.html',
    styleUrls: ['./benchmarks.component.css']
})
export class BenchmarksComponent {

    constructor(public benchmarkService: BenchmarkService,
                public imageLinksService: ImageLinksService) {
    }


    public toItem(context: any): BenchmarkPreview {
        return context as BenchmarkPreview;
    }


}
