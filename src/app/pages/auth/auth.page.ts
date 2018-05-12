import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ICurrentUser } from '../../models/current-user.model';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss']
})
export class AuthPage implements OnInit {
  public user = {
    email: '',
    password: '',
  }
  public currentUser: ICurrentUser;

  constructor(
    private _router: Router,
    private _authService: AuthService) {}

  ngOnInit() {}

  public signIn(user: {email: 'string', password: 'string'}) {
    this._authService
        .authUser(this.user)
        .subscribe(
          response => {
            this._router.navigate(['/profile']);
          },
          error => {
            console.log('error:', error);
          }
      );
  }
}
