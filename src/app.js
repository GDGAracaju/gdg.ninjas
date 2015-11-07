var angular2_1 = require('angular2/angular2');
var calendar_service_1 = require('./google-calendar/calendar.service');
var calendar_component_1 = require('./google-calendar/calendar.component');
angular2_1.bootstrap(calendar_component_1.GdgCalendarComponent, [calendar_service_1.CalendarService]);
