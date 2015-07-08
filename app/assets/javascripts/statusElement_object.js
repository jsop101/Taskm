// StatusElement object
var StatusElement = function(statusPosition){
  this.statusPosition = statusPosition;
};

// Ajax call to get status details from database
StatusElement.prototype.printStatusElement = function(event){
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