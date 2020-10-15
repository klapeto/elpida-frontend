import {Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {SimpleFilter} from '../../../../../models/simple-filter';

@Component({
  selector: 'app-simple-filter-container',
  templateUrl: './simple-filter-container.component.html',
  styleUrls: ['./simple-filter-container.component.css']
})
export class SimpleFilterContainerComponent implements OnInit {

  @Input() filter: SimpleFilter;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private viewContainerRef: ViewContainerRef) { }

  ngOnInit(): void {
    this.filter.createComponent(this.componentFactoryResolver, this.viewContainerRef);
  }
}
