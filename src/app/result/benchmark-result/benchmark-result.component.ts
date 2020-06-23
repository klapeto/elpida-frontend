import {Component, Input} from '@angular/core';
import {BenchmarkResult} from '../../../models/benchmark-result';
import {ValueConverter} from '../../../services/value-converter';
import {ResultType, TaskResult} from '../../../models/task-result';

@Component({
  selector: 'app-benchmark-result',
  templateUrl: './benchmark-result.component.html',
  styleUrls: ['./benchmark-result.component.css']
})
export class BenchmarkResultComponent  {

  @Input() public benchmarkResult: BenchmarkResult;

  constructor(public valueConverter: ValueConverter) {
  }

  public calculateActualResultValue(result: TaskResult): string {
    if (result.type === ResultType.Throughput) {
      return this.valueConverter.convertToSI(result.value / result.time) + result.suffix + '/s';
    }
    return this.valueConverter.convertToSI(result.value) + result.suffix;
  }
}
