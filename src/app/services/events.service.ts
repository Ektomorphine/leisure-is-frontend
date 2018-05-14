import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observer, Observable } from 'rxjs';

@Injectable()
export class EventsService {

  constructor(
    private _http: HttpClient,
  ) {}

  public getEvents(): Observable<any> {
    return Observable.create((observer: Observer<any>) => {
      return this._http.get('http://localhost:3000/api/v1/events')
        .subscribe((response: any) => {
          observer.next(response);
          observer.complete();
      })
    })
  }

}
