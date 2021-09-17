import { Component, OnInit } from '@angular/core';
import {ElpidaVersion} from '../../../../models/elpida/elpidaVersion';

@Component({
  selector: 'app-elpida-item',
  templateUrl: './elpida-item.component.html',
  styleUrls: ['./elpida-item.component.css']
})
export class ElpidaItemComponent implements OnInit {

  item: ElpidaVersion;

  constructor() { }

  ngOnInit(): void {
  }

}
