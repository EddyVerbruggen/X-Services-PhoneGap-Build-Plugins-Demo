// create an event starting now, lasting an hour
var startDate = new Date();
var endDate = new Date();
endDate.setTime(startDate.getTime()+3600000);

var title = "My nice event";
var where = "Home";
var notes = "Some notes about this event.";
var calSuccess = function(message) { alert("Success: " + JSON.stringify(message)); };
var calError = function(message) { alert("Error: " + message); };

var calOptions = window.plugins.calendar.getCalendarOptions(); // grab the defaults
calOptions.firstReminderMinutes = 120; // default is 60, pass in null for no reminder (alarm)

function calendarDemoAdd() {
//  window.plugins.calendar.createEventWithOptions(title,where,notes,startDate,endDate,calOptions,calSuccess,calError);
  window.plugins.calendar.createEventInteractively(title,where,notes,startDate,endDate,calSuccess,calError);
}

function calendarDemoRemove() {
  window.plugins.calendar.deleteEvent(title,where,notes,startDate,endDate,calSuccess,calError);
}