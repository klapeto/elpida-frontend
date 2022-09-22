import {Component} from '@angular/core';
import {BenchmarkResultsService} from '../../services/benchmark-results.service';
import {BenchmarkResultPreviewModel} from '../../models/result/benchmark-result-preview.model';
import {ValueConverter} from '../../services/value-converter';

@Component({
    selector: 'app-latest-benchmark-results',
    templateUrl: './latest-benchmark-results.component.html',
    styleUrls: ['./latest-benchmark-results.component.css']
})
export class LatestBenchmarkResultsComponent {
    public constructor(
        public readonly resultService: BenchmarkResultsService,
        public readonly valueConverter: ValueConverter,
    ) {

    }

    public toItem(context: any): BenchmarkResultPreviewModel {
        return context as BenchmarkResultPreviewModel;
    }

    public getTimestampString(timestamp: string): string {
        return new Date(timestamp).toLocaleString();
    }
}
