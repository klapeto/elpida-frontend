import {Component} from '@angular/core';
import {BenchmarkResultsService} from '../../services/benchmark-results.service';
import {BenchmarkResultPreviewModel} from '../../models/result/benchmark-result-preview.model';
import {ValueConverter} from '../../services/value-converter';
import {QueryModel} from '../../models/query.model';

@Component({
    selector: 'app-latest-results',
    templateUrl: './latest-results.component.html',
    styleUrls: ['./latest-results.component.css']
})
export class LatestResultsComponent {

    public initialQuery = new QueryModel([], 'timestamp', true);

    constructor(
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
