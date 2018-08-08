import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RsvpService {
    constructor(private http: HttpClient) {}

    public sendRsvp(rsvp: any): Observable<any> {
        return this.http.post<any>('http://orlando.runzhuolovemingli.ca/rsvp/', rsvp);
    }
}
