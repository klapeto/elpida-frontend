import {Component, Input} from '@angular/core';
import {TopologyModel} from '../../../models/topology/topology.model';
import {CpuNodeModel, NodeType} from '../../../models/topology/cpuNode.model';
import {ValueConverter} from '../../../services/value-converter';

@Component({
    selector: 'app-topology-view',
    templateUrl: './topology-view.component.html',
    styleUrls: ['./topology-view.component.css']
})
export class TopologyViewComponent {

    @Input()
    public topology: TopologyModel;

    @Input()
    public affinity: number[];

    public constructor(public readonly valueConverter: ValueConverter) {
    }

    public toNode(node: any): CpuNodeModel {
        return node as CpuNodeModel;
    }

    public getNodeTypeName(nodeType: NodeType): string {
        return NodeType[nodeType].toLowerCase();
    }

    public shouldShowAffinityBox(node: CpuNodeModel): boolean {
        return node.nodeType === NodeType.ExecutionUnit
            && this.affinity
            && this.affinity.indexOf(node.osIndex) !== -1;
    }
}
