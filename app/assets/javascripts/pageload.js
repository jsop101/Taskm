var pageLoad = function(){
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