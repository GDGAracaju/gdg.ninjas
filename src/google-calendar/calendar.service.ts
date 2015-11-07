import {Inject} from 'angular2/core';

import {Http, HTTP_PROVIDERS} from 'angular2/http';

export class CalendarService {

    private baseUrl: String;
    private http: Http;
    private calendarId: String;
    private apiKey: String;

    constructor(@Inject(Http) http: Http) {

      this.baseUrl = 'https://www.googleapis.com/calendar/v3/';
      this.http = http;
      //Chave que define qual o calendário que se quer obter eventos, deve ser publica
      this.calendarId = 'pt-br.brazilian#holiday@group.v.calendar.google.com';
      //Chave da api obtida no console do google developers, somente acessa dados públicos
      this.apiKey = 'AIzaSyClBBYc9QJVdDeBx7mAyGIF7i3OxPslLxE';

    }

   eventsFor: (calendarId, apiKey) => String = function (calendarId, apiKey) {
     return this.baseUrl + '/calendars/' + calendarId + '/events/?key=' + apiKey;
   }

   list: () => any  = function () {
      return this.http.get(this.eventFor(this.calendarId, this.apiKey));
   }
}
