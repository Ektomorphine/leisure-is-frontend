import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from '../../services/events.service';
import { GenericService } from '../../services/generic.service';
import { ICurrentUser } from '../../models/current-user.model';
import { MatSnackBar } from '@angular/material';
import { CommentsService } from '../../services/comments.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.page.html',
  styleUrls: ['./event-details.page.scss']
})
export class EventDetailsPage implements OnInit {

  public event;
  public lat: number;
  public lng: number;
  public date: string;
  public currentUser: ICurrentUser;
  private _options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };
  public comments = [];

  constructor(
    private _activeRoute: ActivatedRoute,
    private _eventsService: EventsService,
    private _genericService: GenericService,
    private _router: Router,
    private _snackBar: MatSnackBar,
    private _commentsService: CommentsService,
  ) {
    this.currentUser = JSON.parse(this._genericService.getUser());
    this.getEvent();
  }

  ngOnInit(): void {
    console.log('current user:', this.currentUser);
  }

  public getEvent(): void {
    this._activeRoute.params.subscribe(param => {
      this._eventsService.getEvent(param.id).subscribe(response => {
        const event = response.event;
        this.comments = response.comments;
        this.event = event;
        this.lat = event.coord_y;
        this.lng = event.coord_x;
        this.date = new Date(event.date).toLocaleString('ru', this._options);
      });
    });
  }

  public addToFavorites(): void {
    this._eventsService
      .addBookmark(this.event.id, this.currentUser.id).subscribe();
    this._snackBar.open('Добавлено', 'Избранное', {
      duration: 1000,
    });

  }

  public toEventsList(): void {
    this._router.navigate(['/events']);
  }

  public sendComment(commentText: string): void {
    const comment = {
      text: commentText,
      user_id: this.currentUser.id,
      event_id: this.event.id
    };
    this._commentsService.sendComment(comment).subscribe(res => {
      this.getEvent();
    });
  }

}
