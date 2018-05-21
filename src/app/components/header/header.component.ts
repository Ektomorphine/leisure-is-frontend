import { Component, OnInit } from '@angular/core';
import { ICurrentUser } from '../../models/current-user.model';
import { AuthService } from '../../services/auth.service';
import { GenericService } from '../../services/generic.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public currentUser: ICurrentUser;
  public isUserLoggedIn: boolean;

  constructor(
    private _authService: AuthService,
    private _genericService: GenericService,
    private _router: Router,
  ) {}

  ngOnInit() {}

  public signOut(): void {
    this._authService.signOut().subscribe(res => {
      this._router.navigate(['/auth']);
    });
  }

  public goToProfile(): void {
    this._router.navigate(['/profile']);
  }

  public get isSignedIn(): boolean {
    return this._authService.isSignedIn;
  }

}
