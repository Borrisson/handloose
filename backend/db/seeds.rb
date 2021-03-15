# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require("faker")

3.times do
  user = User.create(name: Faker::Name.first_name, email: Faker::Internet.email, password: "123456", password_confirmation: "123456")

  3.times do
    game = user.games.create!(score: Faker::Number.number(digits: 5), key_stroke_frequency: Faker::Number.number(digits: 2), longest_streak: Faker::Number.decimal_part(digits: 2))
    140.times do
      game.accuracies.create!(character: Faker::String.random(length: 1), hit: Faker::Boolean.boolean)
    end
  end
end
