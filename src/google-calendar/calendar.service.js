var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('angular2/core');
var http_1 = require('angular2/http');
var CalendarService = (function () {
    function CalendarService(http) {
        this.eventsFor = function (calendarId, apiKey) {
            return this.baseUrl + '/calendars/' + calendarId + '/events/?key=' + apiKey;
        };
        this.list = function () {
            return this.http.get(this.eventFor(this.calendarId, this.apiKey));
        };
        this.baseUrl = 'https://www.googleapis.com/calendar/v3/';
        this.http = http;
        this.calendarId = 'pt-br.brazilian#holiday@group.v.calendar.google.com';
        this.apiKey = 'AIzaSyClBBYc9QJVdDeBx7mAyGIF7i3OxPslLxE';
    }
    CalendarService = __decorate([
        __param(0, core_1.Inject(http_1.Http)), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CalendarService);
    return CalendarService;
})();
exports.CalendarService = CalendarService;
