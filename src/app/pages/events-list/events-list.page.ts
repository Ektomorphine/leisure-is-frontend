import { Component, OnInit} from '@angular/core';
import { EventsService } from '../../services/events.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.page.html',
  styleUrls: ['./events-list.page.scss']
})
export class EventsListPage implements OnInit {

  public events = [];

  constructor(
    private _eventsService: EventsService,
    private _router: Router,
  ) {}

  ngOnInit(): void {
    this.getEvents();
  }

  public getEvents(): void {
    this._eventsService
      .getEvents()
      .subscribe(response => {
        this.events = response;
    })
  }

  public openEvent(event): void {
    this._router.navigate(['/event', event.id])
  }

}
