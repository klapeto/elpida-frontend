import {Component} from '@angular/core';
import {Result} from '../../models/result';
import {Router} from '@angular/router';
import {ResultsService} from '../../services/results.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {

  public result: Result;

  constructor(
      private resultsService: ResultsService,
      private router: Router) {
    console.log(router);
    const tokens = this.router.url.split('/');
    resultsService.getSingle(tokens[tokens.length - 1]).subscribe(r => {
      r.timeStamp = new Date(Date.parse(r.timeStamp.toString()));
      this.result = r;
    }, error => console.error(error));
  }
}
