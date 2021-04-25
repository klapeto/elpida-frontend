import {Component, ComponentFactoryResolver, Input, OnInit, ViewContainerRef} from '@angular/core';
import {Filter} from '../../../../models/filter';

@Component({
  selector: 'app-filter-container',
  templateUrl: './filter-container.component.html',
  styleUrls: ['./filter-container.component.css']
})
export class FilterContainerComponent implements OnInit {

  @Input() filter: Filter;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private viewContainerRef: ViewContainerRef) {
  }

  ngOnInit(): void {
    this.filter.createComponent(this.componentFactoryResolver, this.viewContainerRef);
  }
}
