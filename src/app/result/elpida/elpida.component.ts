import {Component, Input} from '@angular/core';
import {Elpida} from '../../../models/elpida';

@Component({
  selector: 'app-elpida',
  templateUrl: './elpida.component.html',
  styleUrls: ['./elpida.component.css']
})
export class ElpidaComponent {

  @Input() public value: Elpida;
}
