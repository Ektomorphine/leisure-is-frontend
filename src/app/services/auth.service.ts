import { Injectable } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { Observable, Observer } from 'rxjs';
import { Response } from '@angular/http';
import { ICurrentUser } from '../models/current-user.model';
import { GenericService } from '../services/generic.service';

@Injectable()
export class AuthService {

  constructor(
    private _tokenService: Angular2TokenService,
    private _genericService: GenericService) {
  }

  public authUser(user): Observable<ICurrentUser> {
    return Observable.create((observer: Observer<ICurrentUser>) => {
      return this._tokenService
        .signIn(user)
        .subscribe(
          res => {
            this._genericService.setUser(res.json().data);
            observer.next(res.json().data);
            observer.complete();
          },
          error => {
            console.error(error.json());
            observer.error(error.json());
            observer.complete();
          })
    })
  }

  public signOut(): Observable<Response> {
    return Observable.create((observer: Observer<Response>) => {
      return this._tokenService.signOut().subscribe(response => {
        observer.next(response);
        observer.complete();
      });
    })
  }

  public signUp(user): Observable<any> {
    return Observable.create((observer: any) => {
      return this._tokenService.registerAccount({
        email: user.login,
        password: user.password,
        passwordConfirmation: user.passwordConfirmation,
        name: user.name
      }).subscribe(response => {
        console.log('reg res', response);
        observer.next(response);
        observer.complete();
      })
    })
  }

}
