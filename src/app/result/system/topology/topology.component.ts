import {Component, Input} from '@angular/core';
import {Topology} from '../../../../models/topology/topology';

@Component({
  selector: 'app-topology',
  templateUrl: './topology.component.html',
  styleUrls: ['./topology.component.css']
})
export class TopologyComponent {

  @Input() public topology: Topology;
  @Input() public affinity: number[];
}
