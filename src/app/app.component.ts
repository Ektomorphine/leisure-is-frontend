import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public form = {number: undefined};
  public newNumber: number;

  constructor (private _http: HttpClient) {}

  public sendNumber(number: number) {
    console.log('number: ', number);
    this._http.post('http://localhost:3000/api/v1/numbers', {'number': number})
      .subscribe((response: any) => {
        this.newNumber = response;
        console.log(this.newNumber);
      })
  }
}
