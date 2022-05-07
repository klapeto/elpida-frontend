import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-icon-with-text',
  templateUrl: './icon-with-text.component.html',
  styleUrls: ['./icon-with-text.component.css']
})
export class IconWithTextComponent implements OnInit {

  @Input() imgSrc: string;

  constructor() { }

  ngOnInit(): void {
  }

}
