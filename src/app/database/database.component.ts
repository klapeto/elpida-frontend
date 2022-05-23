import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.css']
})
export class DatabaseComponent implements OnInit {

  categories = [
      {name: 'Results', link: '/Database/Result', icon: './assets/categories/results.svg'},
      {name: 'CPUs', link: '/Database/Cpu', icon: './assets/categories/cpus.svg'},
      {name: 'Benchmarks', link: '/Database/Benchmark', icon: './assets/categories/benchmarks.svg'},
      {name: 'Operating systems', link: '/Database/Operating-System', icon: './assets/categories/operating-systems.svg'},
      {name: 'Elpida versions', link: '/Database/Elpida-Version', icon: './assets/categories/elpida-versions.svg'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
