# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

num_of_tasks = 20

# Create a set amount of fake tasks
num_of_tasks.times do
  Task.create(
    owner: Faker::Name.name,
    deadline: Faker::Date.forward(50),
    completed: [true, false].sample,
    description: Faker::Hacker.say_something_smart
  )
  sleep(0.1) # Sleep is added so timestamps differ
end

# For each task create from 5 to 25 stages task was in
Task.all.each do |task|
  (rand(20)+5).times do
    task.statuses.create(
      assignee: Faker::Name.name,
      current_status: %w(ToDo Complete Out In Defer).sample
    )
  end
  sleep(0.1)
end