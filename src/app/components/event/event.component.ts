import { RsvpService } from '../../services/rsvp.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})

export class EventComponent implements OnInit {
    public lat = 43.6534399;
    public lng = -79.3840901;

    public lat2 = 43.8444652
    public lng2 = -79.3874129;

    public lat3 = 43.8212885;
    public lng3 = -79.5384433;
    constructor(private rsvpService: RsvpService) {
    }

    ngOnInit() {
    }
}

