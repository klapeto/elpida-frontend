import {Component} from '@angular/core';
import {ResultsService} from '../../services/results.service';
import {ResultPreview} from '../../models/result/result-preview';
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
        public readonly resultService: ResultsService,
        public readonly valueConverter: ValueConverter,
    ) {

    }

    public toItem(context: any): ResultPreview {
        return context as ResultPreview;
    }

    public getTimestampString(timestamp: string): string {
        return new Date(timestamp).toLocaleString();

    }
}
