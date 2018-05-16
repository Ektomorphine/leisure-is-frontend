import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ICurrentUser } from '../../models/current-user.model';
import { MatSnackBar } from '@angular/material';

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
    private _authService: AuthService,
    private _snackBar: MatSnackBar,
  ) {}

  ngOnInit() {}

  public signIn(user: {email: 'string', password: 'string'}): void {
    this._authService
        .authUser(this.user)
        .subscribe(
          response => {
            this._router.navigate(['/profile']);
          },
          error => {
            console.log('error:', error);
            this._snackBar.open('Неверные логин или пароль', 'Ошибка', {
              duration: 2000,
            })
          }
      );
  }

  public goToSignUp(): void {
    this._router.navigate(['/signup']);
  }

}
