import {Component} from '@angular/core';

@Component({
    selector: 'app-nav-menu',
    templateUrl: './nav-menu.component.html',
    styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
    public isExpanded: boolean = false;

    public toggle(): void {
        this.isExpanded = !this.isExpanded;
    }
}
