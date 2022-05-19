import {Component, Input, OnInit} from '@angular/core';
import {TabModel} from '../../models/tab.model';

@Component({
    selector: 'app-tab-control',
    templateUrl: './tab-control.component.html',
    styleUrls: ['./tab-control.component.css']
})
export class TabControlComponent implements OnInit {


    @Input() tabs: TabModel[];

    activeTab: TabModel;

    constructor() {
    }

    ngOnInit(): void {
        this.activeTab = this.tabs[0];
    }

}
