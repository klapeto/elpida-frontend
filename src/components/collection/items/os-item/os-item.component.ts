import {Component, Input, OnInit} from '@angular/core';
import {Os} from '../../../../models/os/os';

@Component({
  selector: 'app-os-item',
  templateUrl: './os-item.component.html',
  styleUrls: ['./os-item.component.css']
})
export class OsItemComponent implements OnInit {

  @Input() item: Os;

  constructor() { }

  ngOnInit(): void {
  }

}
