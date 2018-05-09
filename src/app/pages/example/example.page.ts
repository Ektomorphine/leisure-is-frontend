import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-example',
  templateUrl: './example.page.html',
  styleUrls: ['./example.page.scss']
})
export class ExamplePage {

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
