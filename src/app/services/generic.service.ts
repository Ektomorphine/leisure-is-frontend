import { Injectable } from '@angular/core';
import { ICurrentUser } from '../models/current-user.model';
import { Angular2TokenService } from 'angular2-token';


@Injectable()
export class GenericService {
  private _currentUser: ICurrentUser;

  constructor(
    private _tokenService: Angular2TokenService,
  ) { }

  public getUser(): any {
    return localStorage.getItem('user');
  }

  public setUser(user: ICurrentUser): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  public get isSigned(): boolean {
    return this._tokenService.userSignedIn();
  }

}
