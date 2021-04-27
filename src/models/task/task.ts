import {ResultSpecification} from './result-specification';
import {DataSpecification} from './data-specification';
import {FoundationModel} from '../foundation-model';

export class Task extends FoundationModel {
    constructor(
        id: number,
        public readonly uuid: string,
        public readonly name: string,
        public readonly description: string,
        public readonly result: ResultSpecification,
        public readonly input: DataSpecification,
        public readonly output: DataSpecification
    ) {
        super(id);
    }
}
