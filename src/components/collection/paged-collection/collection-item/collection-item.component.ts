import {Component, ComponentFactoryResolver, Input, OnInit, ViewContainerRef, ViewRef} from '@angular/core';
import {CollectionService} from '../../../../services/collection-service';

@Component({
  selector: 'app-collection-item',
  templateUrl: './collection-item.component.html',
  styleUrls: ['./collection-item.component.css']
})
export class CollectionItemComponent implements OnInit {

  @Input() item: any;
  @Input() service: CollectionService<any, any>;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private viewContainerRef: ViewContainerRef) {
  }

  ngOnInit(): void {
    this.service.createCollectionItemComponent(this.item, this.componentFactoryResolver, this.viewContainerRef);
  }
}
