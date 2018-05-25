import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observer, Observable } from 'rxjs';

@Injectable()
export class CommentsService {

  constructor(
    private _http: HttpClient,
  ) { }

  public sendComment(comment): Observable<any> {
    return Observable.create((observer: Observer<any>) => {
      return this._http
        .post('http://localhost:3000/api/v1/comments', comment)
        .subscribe(response => {
          observer.next(response);
          observer.complete();
          console.log(response);
      });
    });
  }

}
