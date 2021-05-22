import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Elpida} from '../../models/elpida/elpida';
import {ElpidaService} from '../../services/elpida.service';

@Component({
    selector: 'app-elpida-details',
    templateUrl: './elpida-details.component.html',
    styleUrls: ['./elpida-details.component.css']
})
export class ElpidaDetailsComponent implements OnInit {

    elpida: Elpida;

    constructor(
        private readonly elpidaService: ElpidaService,
        private readonly router: Router) {
        const tokens = this.router.url.split('/');
        elpidaService.getSingle(tokens[tokens.length - 1]).subscribe(r => {
            this.elpida = r;
        }, error => console.error(error));
    }

    ngOnInit(): void {
    }

}
