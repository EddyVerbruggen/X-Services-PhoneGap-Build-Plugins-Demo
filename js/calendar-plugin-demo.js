"use strict";

// create an event starting now, lasting an hour
var startDate = new Date();
var endDate = new Date();
endDate.setTime(startDate.getTime()+3600000);

var title = "My nice event";
var where = "Home";
var notes = "Some notes about this event.";
var calSuccess = function(message) { alert("Success: " + JSON.stringify(message)); };
var calError = function(message) { alert("Error: " + message); };


function calendarDemoAdd() {
  window.plugins.calendar.createEvent(title,where,notes,startDate,endDate,calSuccess,calError);
}

function calendarDemoRemove() {
  window.plugins.calendar.deleteEvent(title,where,notes,startDate,endDate,calSuccess,calError);
}