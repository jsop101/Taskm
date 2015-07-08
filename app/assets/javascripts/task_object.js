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