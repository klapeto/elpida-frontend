import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Cpu} from '../../models/result/cpu';
import {CpuService} from '../../services/cpu.service';

@Component({
  selector: 'app-cpu-details',
  templateUrl: './cpu-details.component.html',
  styleUrls: ['./cpu-details.component.css']
})
export class CpuDetailsComponent implements OnInit {

  cpu: Cpu;
  constructor(
      private readonly cpuService: CpuService,
      private readonly router: Router) {
    const tokens = this.router.url.split('/');
    cpuService.getSingle(tokens[tokens.length - 1]).subscribe(r => {
      this.cpu = r;
    }, error => console.error(error));
  }

  ngOnInit(): void {
  }

}
