import { Injectable } from '@angular/core';
import { ICurrentUser } from '../models/current-user.model';


@Injectable()
export class GenericService {
  private _currentUser: ICurrentUser;

  constructor() { }

  public getUser(): any {
    return localStorage.getItem('user');
  }

  public setUser(user: ICurrentUser): void {
    localStorage.setItem('user', JSON.stringify(user));
  }
}
