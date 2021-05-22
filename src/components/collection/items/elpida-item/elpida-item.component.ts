import { Component, OnInit } from '@angular/core';
import {Elpida} from '../../../../models/elpida/elpida';

@Component({
  selector: 'app-elpida-item',
  templateUrl: './elpida-item.component.html',
  styleUrls: ['./elpida-item.component.css']
})
export class ElpidaItemComponent implements OnInit {

  item: Elpida;

  constructor() { }

  ngOnInit(): void {
  }

}
