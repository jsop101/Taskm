class RemoveStatusStepsFromTasks < ActiveRecord::Migration
  def change
    remove_column :tasks, :status, :string
    remove_column :tasks, :steps, :integer
  end
end
