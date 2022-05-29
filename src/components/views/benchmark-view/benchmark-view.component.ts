import {Component, Input} from '@angular/core';
import {BenchmarkModel} from '../../../models/benchmark/benchmark.model';
import {ImageLinksService} from '../../../services/image-links.service';
import {ResultSpecificationModel, ResultType} from '../../../models/task/result-specification.model';

@Component({
    selector: 'app-benchmark-view',
    templateUrl: './benchmark-view.component.html',
    styleUrls: ['./benchmark-view.component.css']
})
export class BenchmarkViewComponent {

    @Input() public benchmark: BenchmarkModel;

    public constructor(
        public readonly imageLinksService: ImageLinksService) {
    }

    public getResultUnit(result: ResultSpecificationModel): string {
        return result.type === ResultType.Raw ? result.unit : `${result.unit}/s`;
    }
}
