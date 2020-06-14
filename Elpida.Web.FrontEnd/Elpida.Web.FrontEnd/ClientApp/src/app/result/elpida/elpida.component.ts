import {Component, Input, OnInit} from '@angular/core';
import {Elpida} from "../../../models/elpida";

@Component({
  selector: 'app-elpida',
  templateUrl: './elpida.component.html',
  styleUrls: ['./elpida.component.css']
})
export class ElpidaComponent implements OnInit {

  @Input() public value: Elpida;

  constructor() {

  }

  ngOnInit() {
  }

}
