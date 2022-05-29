import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {OperatingSystemModel} from '../../../../models/operating-system.model';
import {OperatingSystemService} from '../../../../services/operating-system.service';

@Component({
    selector: 'app-operating-system-details',
    templateUrl: './operating-system-details.component.html',
    styleUrls: ['./operating-system-details.component.css']
})
export class OperatingSystemDetailsComponent implements OnInit {

    public operatingSystem: OperatingSystemModel;

    public constructor(
        private readonly osService: OperatingSystemService,
        private readonly http: HttpClient,
        private route: ActivatedRoute) {
    }

    public ngOnInit(): void {
        this.osService.getSingle(this.route.snapshot.paramMap.get('id')).subscribe(r => {
            this.operatingSystem = r;
        }, error => console.error(error));
    }

}
