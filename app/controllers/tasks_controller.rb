class TasksController < ApplicationController
  # so that #respond_with can be used (gem 'responders' is needed)
  respond_to :html, :json

  def index
    @all_tasks = Task.all
  end

  def show
    @task = Task.find(params[:id])
    if params["position_in_time"]
      @status = @task.statuses[params["position_in_time"].to_i]
      respond_with( @status )
    else
      @all_task_events = @task.statuses.length.to_s
      respond_with(@task)
    end

  end

  def create
  end

  def destroy
  end

  def edit
  end
end
