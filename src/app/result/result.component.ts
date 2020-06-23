import {Component, Inject} from '@angular/core';
import {Result} from '../../models/result';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {

  public result: Result;

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') public baseUrl: string,
    private router: Router) {
    http.get<Result>(baseUrl + 'api' + this.router.url).subscribe(r => {
      r.timeStamp = new Date(Date.parse(r.timeStamp.toString()));
      this.result = r;
    }, error => console.error(error));
  }
}
