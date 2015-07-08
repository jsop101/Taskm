var myTaskObject;
var currentPositionInTime;
var numOfAllTaskEvents = 5;
// var numOfAllTaskEvents;
// var currentTaskId = window.location.href.split("/").pop()
// $(document).ready(function(){

    // var url = '/tasks/' + currentTaskId + '/'
    // $.ajax({
    //   url: url,
    //   type: 'get',
    // }).done(function(response){
    //   console.log(response)
    //   // debugger;
    // });
// var GetNumOfAllTaskEvents = (function (){
// })();

// debugger;

var Task = function(taskName) {
  this.taskName = taskName;
  this.positionInTime = 0;
  this.allStatusElements = (function(){
    var arrayOfAllStatusElements = new Array();
    for (var i = 0; i < numOfAllTaskEvents; i++){
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
// Task.prototype.allStatusElements = function(){
//   var arrayOfAllStatusElements = new Array();
//   for (var i = 0; i <= this.allStatusElements.length; i++){
//     arrayOfAllStatusElements.push(new StatusElement(i))
//   };
//   return arrayOfAllStatusElements;
// };

var Board = function(task){
  this.boardLength = task.allStatusElements.length;
  this.task = task;
};
Board.prototype.drawBoard = function() {
  for (var i = 0; i <= this.task.allStatusElements.length; i++) {
    if (this.task.positionInTime === i) {
      this.printCurrentPositionInTime();
    } else {
      this.printEmptyPositionInTime(i);
    };
  };
};
Board.prototype.eraseBoard = function() {
  $("tr.progress_line").empty();
};
Board.prototype.printCurrentPositionInTime = function(){
  $("tr.progress_line").append('<td class="progress_field active">' + this.task.taskName + '</td>')
};
Board.prototype.printEmptyPositionInTime = function(numInOrder){
  $("tr.progress_line").append('<td class="progress_field">' + numInOrder + '</td>');
};
Board.prototype.printLogElement = function(){
  var url = '/tasks/' + window.location.href.split("/").pop() + '/';
  currentPositionInTime = this.task.positionInTime;
  // debugger;
  $.ajax({
    url: url,
    type: 'get',
    dataType: 'JSON',
    data: {"position_in_time": currentPositionInTime}
  }).done(function(response) {
    // debugger;
    $("div.task_log_container").append('<div class="task_log_element"><p class="task_log_line">' + "Step " + currentPositionInTime + '</p><p class="task_log_line">' + "Assigned to: " + response.assignee + '</p><p class="task_log_line">' + "Status: " + response.current_status  + '</p>'); //+'<p class="task_log_line">' + "Why: " + response.why + '</p></div>');
  });
};
Board.prototype.eraseLogElement = function(){
  $('div.task_log_container div:last-child').remove()
};

var StatusElement = function(statusPosition){
  this.statusPosition = statusPosition;
}
StatusElement.prototype.printStatusElement = function(){
  // debugger;
  var url = '/tasks/' + window.location.href.split("/").pop() + '/'
  currentPositionInTime = this.statusPosition;
  $.ajax({
    url: url,
    type: 'get',
    dataType: 'JSON',
    data: {"position_in_time": currentPositionInTime}
  }).done(function(response) {
    // debugger;
    $("div.task_log_container").append('<div class="task_log_element"><p class="task_log_line">' + "Step " + currentPositionInTime + '</p><p class="task_log_line">' + "Assigned to: " + response.assignee + '</p><p class="task_log_line">' + "Status: " + response.current_status  + '</p>'); //+'<p class="task_log_line">' + "Why: " + response.why + '</p></div>');
  });
}



myTaskObject = new Task('My Task', numOfAllTaskEvents);

$(document).ready(function(){

  var display = new Board(myTaskObject);
  display.drawBoard();
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
    if (display.task.positionInTime > 0) {
      myTaskObject.gobackInTime();
      display.eraseLogElement();
      display.printLogElement();
      display.eraseBoard();
      display.drawBoard();
    };
  });
});