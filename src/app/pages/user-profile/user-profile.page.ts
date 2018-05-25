import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ICurrentUser } from '../../models/current-user.model';
import { GenericService } from '../../services/generic.service';
import { Router } from '@angular/router';
import { EventsService } from '../../services/events.service';
import { BookmarkService } from '../../services/bookmark.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss']
})
export class UserProfilePage implements OnInit {
  public currentUser: ICurrentUser;
  public bookmarks = [];

  constructor(
    private _genericService: GenericService,
    private _router: Router,
    private _eventsService: EventsService,
    private _bookmarkService: BookmarkService,
  ) {
    this.currentUser = JSON.parse(this._genericService.getUser());
  }

  ngOnInit() {
    this._bookmarkService.getUserBookmarks(this.currentUser.id).subscribe(
      res => {
        this.bookmarks = res;
      }
    )
  }

  public toEventsList(): void {
    this._router.navigate(['/events']);
  }

  public deleteBookmark(bookmarkId: number): void {
    console.log(bookmarkId, this.currentUser.id);
    this.bookmarks.forEach((bookmark, index) => {
      if (bookmark.id = bookmarkId) {
        this.bookmarks.splice(index, 1);
      }
    })
    this._bookmarkService
      .deleteBookmark(this.currentUser.id, bookmarkId)
      .subscribe(response => {
        console.log(response);
      })
  }

}
