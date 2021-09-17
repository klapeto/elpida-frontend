import { Component, OnInit } from '@angular/core';
import {TopologyService} from '../../../services/topology.service';

@Component({
  selector: 'app-topologies',
  templateUrl: './topologies.component.html',
  styleUrls: ['./topologies.component.css']
})
export class TopologiesComponent implements OnInit {

  constructor(public readonly topologyService: TopologyService) { }

  ngOnInit(): void {
  }

}
