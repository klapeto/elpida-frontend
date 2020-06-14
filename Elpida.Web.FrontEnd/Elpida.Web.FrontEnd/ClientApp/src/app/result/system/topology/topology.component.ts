import {Component, Input, OnInit} from '@angular/core';
import {Topology} from "../../../../models/topology/topology";

@Component({
  selector: 'app-topology',
  templateUrl: './topology.component.html',
  styleUrls: ['./topology.component.css']
})
export class TopologyComponent implements OnInit {

  @Input() public topology: Topology;

  constructor() { }

  ngOnInit() {
  }

}
