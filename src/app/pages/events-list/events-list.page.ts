import { Component, OnInit} from '@angular/core';
import { EventsService } from '../../services/events.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.page.html',
  styleUrls: ['./events-list.page.scss']
})
export class EventsListPage implements OnInit {

  public events = [];

  constructor(
    private _eventsService: EventsService,
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

}
