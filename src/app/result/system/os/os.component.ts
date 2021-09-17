import {Component, Input} from '@angular/core';
import {Os} from 'src/models/os/os';

@Component({
    selector: 'app-os',
    templateUrl: './os.component.html',
    styleUrls: ['./os.component.css']
})
export class OsComponent {
    @Input() public readonly os: Os;
}
