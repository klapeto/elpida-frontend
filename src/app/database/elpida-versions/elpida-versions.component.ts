import { Component, OnInit } from '@angular/core';
import {ElpidaVersionService} from '../../../services/elpida-version.service';

@Component({
  selector: 'app-elpida-versions',
  templateUrl: './elpida-versions.component.html',
  styleUrls: ['./elpida-versions.component.css']
})
export class ElpidaVersionsComponent implements OnInit {

  constructor(public readonly elpidaVersionService: ElpidaVersionService) { }

  ngOnInit(): void {
  }

}
