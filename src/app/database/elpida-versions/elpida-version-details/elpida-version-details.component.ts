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

    constructor(
        private readonly elpidaVersionService: ElpidaVersionService,
        private readonly http: HttpClient,
        private route: ActivatedRoute) {

    }

    public ngOnInit(): void {
        this.elpidaVersionService.getSingle(this.route.snapshot.paramMap.get('id')).subscribe(r => {
            this.elpidaVersion = r;
        }, error => console.error(error));
    }

}
