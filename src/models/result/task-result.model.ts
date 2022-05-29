import {TaskRunStatisticsModel} from './task-run-statistics.model';
import {ResultSpecificationModel} from '../task/result-specification.model';
import {DataSpecificationModel} from '../task/data-specification.model';
import {TaskModel} from '../task/task.model';

export class TaskResultModel extends TaskModel {
    public constructor(
        id: number,
        uuid: string,
        name: string,
        description: string,
        result: ResultSpecificationModel,
        input: DataSpecificationModel,
        output: DataSpecificationModel,
        public readonly value: number,
        public readonly time: number,
        public readonly inputSize: number,
        public readonly statistics: TaskRunStatisticsModel
    ) {
        super(id, uuid, name, description, result, input, output);
    }
}
