import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {TopologyModel} from '../../models/topology/topology.model';
import {TopologyService} from '../../services/topology.service';

@Component({
  selector: 'app-topology-view-details',
  templateUrl: './topology-details.component.html',
  styleUrls: ['./topology-details.component.css']
})
export class TopologyDetailsComponent implements OnInit {

  topology: TopologyModel;

  constructor(
      private readonly topologyService: TopologyService,
      private readonly http: HttpClient,
      private readonly router: Router) {
    const tokens = this.router.url.split('/');
    topologyService.getSingle(tokens[tokens.length - 1]).subscribe(r => {
      this.topology = r;
    }, error => console.error(error));
  }


  ngOnInit(): void {
  }

}
