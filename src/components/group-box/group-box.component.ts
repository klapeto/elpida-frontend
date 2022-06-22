import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-group-box',
    templateUrl: './group-box.component.html',
    styleUrls: ['./group-box.component.css']
})
export class GroupBoxComponent {

    @Input() public readonly title: string;
}
