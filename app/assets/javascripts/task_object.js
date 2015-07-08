// Task object
var Task = function(taskName) {
  this.taskName = taskName;
  this.positionInTime = 0;
  this.allStatusElements = (function(){ // Iffy retruning array of StatusElement objects.
    var arrayOfAllStatusElements = new Array();
    for (var i = 0; i <= numOfAllTaskEvents; i++){
      arrayOfAllStatusElements.push(new StatusElement(i))
    };
    return arrayOfAllStatusElements;
  })();
};

// Functions to change positionInTime
Task.prototype.advanceInTime = function(){
  this.positionInTime++;
};
Task.prototype.gobackInTime = function(){
  this.positionInTime--;
};