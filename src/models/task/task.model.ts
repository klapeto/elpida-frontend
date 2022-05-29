import {ResultSpecificationModel} from './result-specification.model';
import {DataSpecificationModel} from './data-specification.model';
import {FoundationModel} from '../foundation.model';

export class TaskModel extends FoundationModel {
    constructor(
        id: number,
        public readonly uuid: string,
        public readonly name: string,
        public readonly description: string,
        public readonly result: ResultSpecificationModel,
        public readonly input: DataSpecificationModel,
        public readonly output: DataSpecificationModel
    ) {
        super(id);
    }
}
