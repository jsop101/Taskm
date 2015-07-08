var numOfAllTaskEvents = 9;

// Global variable not declared at beginning, as information is kept when task is changed
myTaskObject = new Task('My Task', numOfAllTaskEvents);

// pageload() is called when refreshed
$(document).ready(pageLoad);
// pageload() is called if acting like single page app (Turbolinks gem)
$(document).on('page:load', pageLoad);