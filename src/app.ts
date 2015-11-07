// TODO: Apenas para testar se o angular2 está rodando, irá mudar muita coisa

import {Component, View, bootstrap} from 'angular2/angular2';

import {Http} from 'angular2/http';

import {CalendarService} from './google-calendar/calendar.service';

import {GdgCalendarComponent} from './google-calendar/calendar.component';

bootstrap(GdgCalendarComponent, [CalendarService]);
