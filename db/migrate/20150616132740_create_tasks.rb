class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.string :status
      t.string :owner
      t.integer :steps
      t.date :created
      t.date :deadline
      t.boolean :completed

      t.timestamps null: false
    end
  end
end
