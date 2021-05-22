import { Component, OnInit } from '@angular/core';
import {ElpidaService} from '../../../services/elpida.service';

@Component({
  selector: 'app-elpidas',
  templateUrl: './elpidas.component.html',
  styleUrls: ['./elpidas.component.css']
})
export class ElpidasComponent implements OnInit {

  constructor(public readonly elpidaService: ElpidaService) { }

  ngOnInit(): void {
  }

}
