var myTaskObject;
var currentPositionInTime;
var numOfAllTaskEvents = 9;


var Task = function(taskName) {
  this.taskName = taskName;
  this.positionInTime = 0;
  this.allStatusElements = (function(){
    var arrayOfAllStatusElements = new Array();
    for (var i = 0; i <= numOfAllTaskEvents; i++){
      arrayOfAllStatusElements.push(new StatusElement(i))
    };
    return arrayOfAllStatusElements;
  })();
};
Task.prototype.advanceInTime = function(){
  this.positionInTime++;
};
Task.prototype.gobackInTime = function(){
  this.positionInTime--;
};

var Board = function(task){
  this.boardLength = task.allStatusElements.length - 1;
  this.task = task;
};
Board.prototype.drawBoard = function() {
  for (var i = 1; i <= this.boardLength; i++) {
    if (this.task.positionInTime === i) {
      this.printCurrentPositionInTime(i);
    } else {
      this.printEmptyPositionInTime(i);
    };
  };
};
Board.prototype.eraseBoard = function() {
  $("tr.progress_line").empty();
};
Board.prototype.printCurrentPositionInTime = function(numInOrder){
  $("tr.progress_line").append('<td class="progress_field active" id="' + numInOrder + '">' + this.task.taskName + '</td>')
};
Board.prototype.printEmptyPositionInTime = function(numInOrder){
  $("tr.progress_line").append('<td class="progress_field" id="' + numInOrder + '">' + numInOrder + '</td>');
};
Board.prototype.printLogElement = function(){
  this.task.allStatusElements[this.task.positionInTime].printStatusElement();
};
Board.prototype.eraseLogElement = function(){
  $('div.task_log_container div:last-child').remove()
};

var StatusElement = function(statusPosition){
  this.statusPosition = statusPosition;
}
StatusElement.prototype.printStatusElement = function(event){

  var url = '/tasks/' + window.location.href.split("/").pop() + '/'
  currentPositionInTime = this.statusPosition;
  $.ajax({
    url: url,
    type: 'get',
    dataType: 'JSON',
    data: {"position_in_time": currentPositionInTime}
  }).done(function(response) {
    $("div.task_log_container").append('<div class="task_log_element"><p class="task_log_line">' + "Step " + currentPositionInTime + '</p><p class="task_log_line">' + "Assigned to: " + response.assignee + '</p><p class="task_log_line">' + "Status: " + response.current_status  + '</p>');
  });
}

myTaskObject = new Task('My Task', numOfAllTaskEvents);

var pageLoading = function(){
  var display = new Board(myTaskObject);
  display.drawBoard();
  // debugger;
  $('body').on("click", 'button.time_travel_next', function(event){
    if (display.task.positionInTime < display.boardLength) {
      myTaskObject.advanceInTime();
      display.eraseLogElement();
      display.printLogElement();
      display.eraseBoard();
      display.drawBoard();
    };
  });
  $('body').on("click", 'button.time_travel_back', function(event){
    if (display.task.positionInTime > 1) {
      myTaskObject.gobackInTime();
      display.eraseLogElement();
      display.printLogElement();
      display.eraseBoard();
      display.drawBoard();
    };
  });
  $('body').on("click","tr.progress_line",function(event){
    myTaskObject.positionInTime = parseInt(event.target.id);
    display.eraseLogElement();
    display.printLogElement();
    display.eraseBoard();
    display.drawBoard();
  });
};

$(document).ready(pageLoading);
$(document).on('page:load', pageLoading);