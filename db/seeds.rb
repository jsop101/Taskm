# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

20.times do
  Task.create(status: %w(ToDo Complete Out In Defer).sample,
              owner: Faker::Name.name,
              steps: (rand(14) + 1),
              deadline: Faker::Date.forward(50),
              completed: [true, false].sample,
              description: Faker::Hacker.say_something_smart)
end