import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
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
      private readonly router: Router) {
    const tokens = this.router.url.split('/');
    osService.getSingle(tokens[tokens.length - 1]).subscribe(r => {
      this.os = r;
    }, error => console.error(error));
  }

  ngOnInit(): void {
  }

}
