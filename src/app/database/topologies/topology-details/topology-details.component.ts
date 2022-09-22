import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
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
        private readonly route: ActivatedRoute) {
    }


    public async ngOnInit(): Promise<void> {
        this.route.params.subscribe(async p => {
            this.topology = await this.topologyService.getSingle(p['id']);
        });
    }
}
