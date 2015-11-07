var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var calendar_service_1 = require('./calendar.service');
var GdgCalendarComponent = (function () {
    function GdgCalendarComponent(calendar) {
        this.items = function () {
            return this.calendar.list();
        };
        this.calendar = calendar;
    }
    GdgCalendarComponent = __decorate([
        angular2_1.Component({
            selector: 'calendar-gdg'
        }),
        angular2_1.View({
            template: "\n  <div class=\"mdl-grid\">\n      <div class=\"mdl-cell mdl-cell--2-col\" ></div>\n      <div class=\"mdl-cell mdl-cell--8-col\" >\n    <section class=\"section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp\">\n          <div class=\"mdl-card mdl-cell mdl-cell--12-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone \" >\n            <div class=\"mdl-grid\">\n\n            <div class=\"mdl-card__title mdl-cell--12-col\">\n              <div class=\"mdl-cell--12-col\">\n                <h1 class=\"mdl-card__title-text\">Eventos - {{items.summary}}</h1>\n              </div>\n              <div class=\"mdl-cell--12-col\">\n              {{items.description}}\n              </div>\n            </div>\n            <div *ng-for=\"#item of items.items\">\n              <div class=\"mdl-cell mdl-cell--2-col mdl-cell--1-col-phone\">\n                <div class=\"mdl-color--primary\"></div>\n              </div>\n              <div class=\"section__text mdl-cell mdl-cell--10-col-desktop mdl-cell--6-col-tablet mdl-cell--3-col-phone\">\n                <h5>{{item.summary}}</h5>\n\n                Status: {{item.status}}<br/>\n                Link: <a ng-href=\"{{item.htmlLink}}\">Site externo</a><br/>\n                Come\u00E7a em: {{item.start.date | date: 'dd/MM/yyyy'}}<br/>\n                Termina em: {{item.end.date | date: 'dd/MM/yyyy'}}<br/>\n              </div>\n            </div>\n            </div>\n            </div>\n            <div class=\"mdl-card__supporting-text\">\n              <pre>{{items | json}}</pre>\n            </div>\n\n          </div>\n    </section>\n      </div>\n</div>\n  "
        }), 
        __metadata('design:paramtypes', [calendar_service_1.CalendarService])
    ], GdgCalendarComponent);
    return GdgCalendarComponent;
})();
exports.GdgCalendarComponent = GdgCalendarComponent;
