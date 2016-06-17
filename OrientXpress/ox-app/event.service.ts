﻿import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { Event } from './event';

@Injectable()
export class EventService {
    eventsUrl: string = 'api/events';
    private events: Event[];
    constructor(private http: Http) {
    }
    getEvents(): Observable<Event[]> {

        this.http.get(this.eventsUrl).map((res: Response) => {
            if (res.status != 200) {
                throw new Error('No comments to retrieve! code status ' + res.status);
            } else {
                return res.json();
            }
        }).subscribe(
            (data: Event[]) => { return data; },
            (err) => this.error = err);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }

    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}