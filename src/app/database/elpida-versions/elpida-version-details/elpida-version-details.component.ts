import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ElpidaVersionModel} from '../../../../models/elpida/elpida-version.model';
import {ElpidaVersionService} from '../../../../services/elpida-version.service';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-elpida-version-details',
    templateUrl: './elpida-version-details.component.html',
    styleUrls: ['./elpida-version-details.component.css']
})
export class ElpidaVersionDetailsComponent implements OnInit {

    public elpidaVersion: ElpidaVersionModel;

    public constructor(
        private readonly elpidaVersionService: ElpidaVersionService,
        private readonly http: HttpClient,
        private readonly route: ActivatedRoute) {

    }

    public async ngOnInit(): Promise<void> {
        this.elpidaVersion = await this.elpidaVersionService.getSingle(this.route.snapshot.paramMap.get('id'));
    }

}
