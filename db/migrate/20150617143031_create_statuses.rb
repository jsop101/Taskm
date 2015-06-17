class CreateStatuses < ActiveRecord::Migration
  def change
    create_table :statuses do |t|
      t.string :assignee
      t.string :current_status
      t.references :task, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
