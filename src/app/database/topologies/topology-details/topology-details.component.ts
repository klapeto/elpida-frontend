import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {TopologyModel} from '../../../../models/topology/topology.model';
import {TopologyService} from '../../../../services/topology.service';

@Component({
  selector: 'app-topology-view-details',
  templateUrl: './topology-details.component.html',
  styleUrls: ['./topology-details.component.css']
})
export class TopologyDetailsComponent implements OnInit {

  public topology: TopologyModel;

  public constructor(
      private readonly topologyService: TopologyService,
      private readonly http: HttpClient,
      private route: ActivatedRoute) {
  }


  public ngOnInit(): void {
    this.topologyService.getSingle(this.route.snapshot.paramMap.get('id')).subscribe(r => {
      this.topology = r;
    }, error => console.error(error));
  }

}
