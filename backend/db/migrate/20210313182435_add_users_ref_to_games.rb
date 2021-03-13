class AddUsersRefToGames < ActiveRecord::Migration[6.1]
  def change
    add_reference :games, :users, null: false, foreign_key: true
  end
end
