import {Component, Input} from '@angular/core';
import {Topology} from '../../models/topology/topology';
import {CpuNode, NodeType} from '../../models/topology/cpuNode';
import {ValueConverter} from '../../services/value-converter';

@Component({
    selector: 'app-topology',
    templateUrl: './topology.component.html',
    styleUrls: ['./topology.component.css']
})
export class TopologyComponent {

    @Input() public topology: Topology;
    @Input() public affinity: number[];

    constructor(public readonly valueConverter: ValueConverter) {
    }

    public toNode(node: any): CpuNode {
        return node as CpuNode;
    }

    public getNodeTypeName(nodeType: NodeType): string {
        return NodeType[nodeType].toLowerCase();
    }

    public shouldShowAffinityBox(node: CpuNode): boolean {
        return node.nodeType === NodeType.ExecutionUnit
            && this.affinity
            && this.affinity.indexOf(node.osIndex) !== -1;
    }
}
