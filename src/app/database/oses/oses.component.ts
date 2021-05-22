import { Component, OnInit } from '@angular/core';

import {OsService} from '../../../services/os.service';

@Component({
  selector: 'app-oses',
  templateUrl: './oses.component.html',
  styleUrls: ['./oses.component.css']
})
export class OsesComponent implements OnInit {

  constructor(public readonly osService: OsService) { }

  ngOnInit(): void {
  }

}
