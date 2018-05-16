import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';

@Injectable()
export class BookmarkService {

  constructor(
    private _http: HttpClient,
  ) { }

  public getUserBookmarks(userId: number): Observable<any> {
    return Observable.create((observer: Observer<any>) => {
      return this._http
        .get(`http://localhost:3000/api/v1/bookmarks?id=${userId}`)
        .subscribe(response => {
          observer.next(response);
          observer.complete();
        })
    })
  }

  public deleteBookmark(userId: number, eventId: number): Observable<any> {
    return Observable.create((observer: Observer<any>) => {
      return this._http
        .delete(`http://localhost:3000/api/v1/bookmarks/${eventId}?userId=${userId}`)
        .subscribe(response => {
          observer.next(response);
          observer.complete();
        })
    })
  }

}
