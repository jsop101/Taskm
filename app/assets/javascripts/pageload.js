// Page activity
var pageLoad = function(){
  var display = new Board(myTaskObject);
  display.drawBoard();
  // Click on button 'next'
  $('body').on("click", 'button.time_travel_next', function(event){
    if (display.task.positionInTime < display.boardLength) {
      myTaskObject.advanceInTime();
      display.eraseStatusElement();
      display.printStatusElement();
      display.eraseBoard();
      display.drawBoard();
    };
  });

  // Click on button 'back'
  $('body').on("click", 'button.time_travel_back', function(event){
    if (display.task.positionInTime > 1) {
      myTaskObject.gobackInTime();
      display.eraseStatusElement();
      display.printStatusElement();
      display.eraseBoard();
      display.drawBoard();
    };
  });

  // Click on progress board itself
  $('body').on("click","tr.progress_line",function(event){
    myTaskObject.positionInTime = parseInt(event.target.id);
    display.eraseStatusElement();
    display.printStatusElement();
    display.eraseBoard();
    display.drawBoard();
  });
};