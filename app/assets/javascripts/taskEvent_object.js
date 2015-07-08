// TaskEvent object
var TaskEvent = function(statusPosition){
  this.statusPosition = statusPosition;
};

TaskEvent.prototype.activeDOMBoardElement = function(taskName){
  return '<td class="progress_field active" id="' + this.statusPosition + '">' + taskName + '</td>'
};

TaskEvent.prototype.regularDOMBoardElement = function(){
  return '<td class="progress_field" id="' + this.statusPosition + '">' + this.statusPosition + '</td>';
};

// Ajax call to get status details from database
TaskEvent.prototype.printLogElement = function(event){
  var url = '/tasks/' + window.location.href.split("/").pop() + '/' // Scrapping task id from href
  var currentPositionInTime = this.statusPosition;
  $.ajax({
    url: url,
    type: 'get',
    dataType: 'JSON',
    data: {"position_in_time": currentPositionInTime}
  }).done(function(response) {
    $("div.task_log_container").append('<div class="task_log_element"><p class="task_log_line">' + "Step " + currentPositionInTime + '</p><p class="task_log_line">' + "Assigned to: " + response.assignee + '</p><p class="task_log_line">' + "Status: " + response.current_status  + '</p>');
  });
};