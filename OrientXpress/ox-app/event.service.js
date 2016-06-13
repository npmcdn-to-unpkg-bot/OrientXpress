"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var event_1 = require('./event');
var EventService = (function () {
    function EventService(http, events) {
        var _this = this;
        this.http = http;
        this.events = events;
        this.eventsUrl = '~/api/events';
        this.getEvents = function () {
            _this.events = _this.http.get(_this.eventsUrl).map(function (res) { return res.json(); }).map(function (rawEvents) { return rawEvents.map(event_1.Event.create); });
            return _this.events;
        };
    }
    EventService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object, Array])
    ], EventService);
    return EventService;
    var _a;
}());
exports.EventService = EventService;
//# sourceMappingURL=event.service.js.map