// Board object
var Board = function(task){
  this.boardLength = task.allStatusElements.length - 1;
  this.task = task;
};

// Draw board and call different function for current element
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

Board.prototype.printStatusElement = function(){
  this.task.allStatusElements[this.task.positionInTime].printStatusElement();
};

Board.prototype.eraseStatusElement = function(){
  $('div.task_log_container div:last-child').remove()
};