import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { GenericService } from '../../services/generic.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss']
})
export class SignUpPage {

  public newUser = {
    login: '',
    password: '',
    passwordConfirmation: '',
    name: '',
  }

  constructor(
    private _authService: AuthService,
    private _router: Router,
  ) {}

  public signUp(): void {
    this._authService.signUp(this.newUser)
      .subscribe(res => {
        this._router.navigate(['/auth']);
      })
  }

}
