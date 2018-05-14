import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ICurrentUser } from '../../models/current-user.model';
import { GenericService } from '../../services/generic.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss']
})
export class UserProfilePage {
  public currentUser: ICurrentUser;

  constructor(
    private _genericService: GenericService,
    private _router: Router,
  ) {}

  ngOnInit() {
    this.currentUser = JSON.parse(this._genericService.getUser());
  }

  public toEventsList(): void {
    this._router.navigate(['/events']);
  }

}
