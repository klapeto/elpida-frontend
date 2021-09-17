import {Component, Input} from '@angular/core';
import {CpuNode, NodeType} from '../../../models/topology/cpuNode';
import {ValueConverter} from '../../../services/value-converter';

@Component({
    selector: 'app-cpu-node',
    templateUrl: './cpu-node.component.html',
    styleUrls: ['./cpu-node.component.css']
})
export class CpuNodeComponent {

    @Input() public readonly node: CpuNode;
    @Input() public readonly affinity: number[];

    constructor(public readonly valueConverter: ValueConverter) {
    }

    public isUsed(): boolean {
        return this.affinity !== undefined
            && this.node.nodeType === NodeType.ExecutionUnit && this.affinity.findIndex(a => a === this.node.osIndex) !== -1;
    }

    public getBaseClass(): string {
        return NodeType[this.node.nodeType].toLowerCase() + 'Node';
    }
}
