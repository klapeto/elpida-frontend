import {Component, Input, OnInit} from '@angular/core';
import {CpuNode, NodeType} from "../../../../../models/topology/cpuNode";
import {ValueConverter} from "../../../../../services/value-converter";

@Component({
  selector: 'app-cpu-node',
  templateUrl: './cpu-node.component.html',
  styleUrls: ['./cpu-node.component.css']
})
export class CpuNodeComponent implements OnInit {

  @Input() public node: CpuNode;

  constructor(public valueConverter: ValueConverter) { }

  ngOnInit() {
  }

  public getRowClass(): string {
    let childrenCountRoot = Math.ceil(Math.sqrt(this.node.children.length));
    return "row-cols-"+childrenCountRoot;
  }

  public getBaseClass() : string{
    return NodeType[this.node.type].toLowerCase() + "Node";
  }
}
