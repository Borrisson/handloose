# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require("faker")

User.create(name: "Alice", email: "alice@wonderland.com", password: "password", password_confirmation: "password")

10.times do
  user = User.create(name: Faker::Name.first_name, email: Faker::Internet.email, password: "123456", password_confirmation: "123456")

  10.times do
    game = user.games.create!(score: Faker::Number.within(range: 20000..232030), key_stroke_frequency: Faker::Number.number(digits: 2), longest_streak: Faker::Number.within(range: 1..140))

    140.times do
      game.accuracies.create!(character: Faker::Alphanumeric.alphanumeric(number: 1, min_alpha: 1), hit: Faker::Boolean.boolean)
    end
  end
end
