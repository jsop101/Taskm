class TasksController < ApplicationController
  respond_to :html, :json

  def index
    @all_tasks = Task.all
    p '#'*100
    p params
  end

  def show
    @task = Task.find(params[:id])
    p "?"*100
    if params["position_in_time"]
      p 'if'
      @status = @task.statuses[params["position_in_time"].to_i]
      # respond_to do |format|
      # #   format.html { redirect_to @task}
      #   format.json { render json: @status }
      # end
      respond_with( @status )
    else
      p 'else'
      @all_task_events = @task.statuses.length.to_s
      respond_with(@task)#{"num_of_all_task_events" => @all_task_events})
      # respond_to do |format|
      #   format.json { render json: {"num_of_all_task_events" => @all_task_events} }
      # end
    end

  end

  def create
  end

  def destroy
  end

  def edit
  end
end
