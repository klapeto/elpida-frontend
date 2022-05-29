import {Component} from '@angular/core';

@Component({
    selector: 'app-database',
    templateUrl: './database.component.html',
    styleUrls: ['./database.component.css']
})
export class DatabaseComponent {

    public categories: ({ name: string; link: string; icon: string })[] = [
        {name: 'Results', link: '/Database/Result', icon: './assets/categories/results.svg'},
        {name: 'CPUs', link: '/Database/Cpu', icon: './assets/categories/cpus.svg'},
        {name: 'Topologies', link: '/Database/Topology', icon: './assets/categories/topologies.svg'},
        {name: 'Benchmarks', link: '/Database/Benchmark', icon: './assets/categories/benchmarks.svg'},
        {name: 'Operating systems', link: '/Database/Operating-System', icon: './assets/categories/operating-systems.svg'},
        {name: 'Elpida versions', link: '/Database/Elpida-Version', icon: './assets/categories/elpida-versions.svg'},
    ];

    public constructor() {
    }
}
