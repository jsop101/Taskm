class TasksController < ApplicationController
  def index
    @all_tasks = Task.all
    # p '#'*100
    # p params

  end

  def show
    @task = Task.find(params[:id])
    # p "?"*100
    # p params
    # respond_to do |format|
    #   format.html { redirect_to @task}
    #   format.json { render json: @task }
    # end

  end

  def create
  end

  def destroy
  end

  def edit
  end
end
