import {Component} from '@angular/core';
import {TopologyService} from '../../../services/topology.service';
import {TopologyPreviewModel} from '../../../models/topology/topology-preview.model';
import {ImageLinksService} from '../../../services/image-links.service';

@Component({
    selector: 'app-topologies',
    templateUrl: './topologies.component.html',
    styleUrls: ['./topologies.component.css']
})
export class TopologiesComponent {

    public constructor(public readonly topologyService: TopologyService,
                public readonly imageLinksService: ImageLinksService) {
    }

    public toItem(context: any): TopologyPreviewModel {
        return context as TopologyPreviewModel;
    }
}
