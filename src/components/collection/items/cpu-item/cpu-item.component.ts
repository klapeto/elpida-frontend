import {Component, Input, OnInit} from '@angular/core';
import {CpuPreview} from '../../../../models/cpu/cpu-preview';

@Component({
  selector: 'app-cpu-view-details-item',
  templateUrl: './cpu-item.component.html',
  styleUrls: ['./cpu-item.component.css']
})
export class CpuItemComponent implements OnInit {

  @Input() item: CpuPreview;

  constructor() { }

  ngOnInit(): void {
  }

}
