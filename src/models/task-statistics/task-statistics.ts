import {Cpu} from '../cpu/cpu';
import {Topology} from '../topology/topology';
import {Task} from '../task/task';
import {FoundationModel} from '../foundation-model';

export class TaskStatistics extends FoundationModel {
    constructor(
        id: number,
        public readonly cpu: Cpu,
        public readonly task: Task,
        public readonly topology: Topology,
        public readonly sampleSize: number,
        public readonly max: number,
        public readonly min: number,
        public readonly mean: number,
        public readonly standardDeviation: number,
        public readonly tau: number,
        public readonly marginOfError: number,
    ) {
        super(id);
    }
}
