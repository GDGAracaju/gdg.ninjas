import {Component, View, bootstrap, NgFor, NgIf} from 'angular2/angular2';

import {CalendarService} from './calendar.service';

@Component({
  selector: 'calendar-gdg'
})

@View({
  template: `
  <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--2-col" ></div>
      <div class="mdl-cell mdl-cell--8-col" >
    <section class="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
          <div class="mdl-card mdl-cell mdl-cell--12-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone " >
            <div class="mdl-grid">

            <div class="mdl-card__title mdl-cell--12-col">
              <div class="mdl-cell--12-col">
                <h1 class="mdl-card__title-text">Eventos - {{items.summary}}</h1>
              </div>
              <div class="mdl-cell--12-col">
              {{items.description}}
              </div>
            </div>
            <div *ng-for="#item of items.items">
              <div class="mdl-cell mdl-cell--2-col mdl-cell--1-col-phone">
                <div class="mdl-color--primary"></div>
              </div>
              <div class="section__text mdl-cell mdl-cell--10-col-desktop mdl-cell--6-col-tablet mdl-cell--3-col-phone">
                <h5>{{item.summary}}</h5>

                Status: {{item.status}}<br/>
                Link: <a ng-href="{{item.htmlLink}}">Site externo</a><br/>
                Começa em: {{item.start.date | date: 'dd/MM/yyyy'}}<br/>
                Termina em: {{item.end.date | date: 'dd/MM/yyyy'}}<br/>
              </div>
            </div>
            </div>
            </div>
            <div class="mdl-card__supporting-text">
              <pre>{{items | json}}</pre>
            </div>

          </div>
    </section>
      </div>
</div>
  `
})

export class GdgCalendarComponent {
   calendar: CalendarService;
  constructor(calendar: CalendarService){
    this.calendar = calendar;
  }

  items: () => any = function () {
    return this.calendar.list();
  }
}
