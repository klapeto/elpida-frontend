import {Component, Input, OnInit} from '@angular/core';
import {TopologyPreview} from '../../../../models/topology/topology-preview';

@Component({
  selector: 'app-topology-item',
  templateUrl: './topology-item.component.html',
  styleUrls: ['./topology-item.component.css']
})
export class TopologyItemComponent implements OnInit {

  @Input() item: TopologyPreview;

  constructor() { }

  ngOnInit(): void {
  }

}
