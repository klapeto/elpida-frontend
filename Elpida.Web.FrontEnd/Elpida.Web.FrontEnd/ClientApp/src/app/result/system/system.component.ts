import {Component, Input, OnInit} from '@angular/core';
import {System} from "../../../models/system";

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.css']
})
export class SystemComponent implements OnInit {

  @Input() public system: System;

  constructor() { }

  ngOnInit() {
  }

}
