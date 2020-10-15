import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SimpleFiltersService} from '../../../../services/simple-filters.service';
import {Query} from '../../../../models/query';

@Component({
  selector: 'app-simple-filters',
  templateUrl: './simple-filters.component.html',
  styleUrls: ['./simple-filters.component.css']
})
export class SimpleFiltersComponent implements OnInit {

  @Output() public readonly submitted = new EventEmitter<Query>();

  constructor(public simpleFiltersService: SimpleFiltersService) {

  }

  public onSubmit() {
    console.log(this.simpleFiltersService.filters[1].value);
  }

  ngOnInit(): void {
  }

}
