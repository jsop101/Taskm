// Task object
var Task = function(taskName) {
  this.taskName = taskName;
  this.positionInTime = 0;
  this.allTaskEvents = (function(){ // Iffy retruning array of TaskEvent objects.
    var arrayOfAllTaskEvents = new Array();
    for (var i = 0; i <= numOfAllTaskEvents; i++){
      arrayOfAllTaskEvents.push(new TaskEvent(i))
    };
    return arrayOfAllTaskEvents;
  })();
};

// Functions to change positionInTime
Task.prototype.advanceInTime = function(){
  this.positionInTime++;
};
Task.prototype.gobackInTime = function(){
  this.positionInTime--;
};