import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {Os} from '../../models/os/os';
import {OsService} from '../../services/os.service';

@Component({
  selector: 'app-os-details',
  templateUrl: './os-details.component.html',
  styleUrls: ['./os-details.component.css']
})
export class OsDetailsComponent implements OnInit {

  os: Os;

  constructor(
      private readonly osService: OsService,
      private readonly http: HttpClient,
      private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.osService.getSingle(this.route.snapshot.paramMap.get('id')).subscribe(r => {
      this.os = r;
    }, error => console.error(error));
  }

}
