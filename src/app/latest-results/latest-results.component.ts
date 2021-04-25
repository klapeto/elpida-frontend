import {Component, Inject} from '@angular/core';
import {PagedResult} from '../../models/paged-result';
import {ResultPreview} from '../../models/result-preview';
import {ValueConverter} from '../../services/value-converter';
import {ResultsService} from '../../services/results.service';
import {PageRequest} from '../../models/page-request';
import {Query} from '../../models/query';

@Component({
    selector: 'app-latest-results',
    templateUrl: './latest-results.component.html',
    styleUrls: ['./latest-results.component.css'],
    providers: [ValueConverter]
})
export class LatestResultsComponent {
    constructor(
        public readonly resultService: ResultsService
    ) {

    }
}
