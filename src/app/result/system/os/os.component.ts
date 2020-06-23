import {Component, Input} from '@angular/core';
import { Os } from 'src/models/os';

@Component({
  selector: 'app-os',
  templateUrl: './os.component.html',
  styleUrls: ['./os.component.css']
})
export class OsComponent {
  @Input() public os: Os;
}
