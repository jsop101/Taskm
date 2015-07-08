// Board object
var Board = function(task){
  this.boardLength = task.allStatusElements.length - 1;
  this.task = task;
};

// Draw board and call different function for current element
Board.prototype.drawBoard = function() {
  for (var i = 1; i <= this.boardLength; i++) {
    if (this.task.positionInTime === i) {
      this.printActivePosition(i);
    } else {
      this.printRegularPosition(i);
    };
  };
};

// Get DOM string from StatusElement for drawBoard()
Board.prototype.printActivePosition = function(numInOrder){
  $("tr.progress_line").append(this.task.allStatusElements[numInOrder].activeDOMBoardElement(this.task.taskName));
};
Board.prototype.printRegularPosition = function(numInOrder){
  $("tr.progress_line").append(this.task.allStatusElements[numInOrder].regularDOMBoardElement());
};
Board.prototype.eraseBoard = function() {
  $("tr.progress_line").empty();
};

// DOM is manipulated from StatusElement function, because of Ajax call
Board.prototype.printLogElement = function(){
  this.task.allStatusElements[this.task.positionInTime].printLogElement();
};

Board.prototype.eraseLogElement = function(){
  $('div.task_log_container div:last-child').remove()
};