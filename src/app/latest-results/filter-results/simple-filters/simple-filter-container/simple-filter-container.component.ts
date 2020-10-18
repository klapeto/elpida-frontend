import {Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {Filter} from '../../../../../models/filter';

@Component({
  selector: 'app-simple-filter-container',
  templateUrl: './simple-filter-container.component.html',
  styleUrls: ['./simple-filter-container.component.css']
})
export class SimpleFilterContainerComponent implements OnInit {

  @Input() filter: Filter;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private viewContainerRef: ViewContainerRef) { }

  ngOnInit(): void {
    this.filter.createComponent(this.componentFactoryResolver, this.viewContainerRef);
  }
}
