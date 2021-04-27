import {Elpida} from '../elpida/elpida';
import {System} from './system';
import {BenchmarkResult} from './benchmark-result';
import {FoundationModel} from '../foundation-model';

export class Result extends FoundationModel {

    constructor(
        id: number,
        public timeStamp: Date,
        public readonly elpida: Elpida,
        public readonly affinity: number[],
        public readonly system: System,
        public readonly result: BenchmarkResult
    ) {
        super(id);
    }
}
