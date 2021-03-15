class AddUserIdToGames < ActiveRecord::Migration[6.1]
  def change
    add_reference :games, :user, index: true, foreign_key: true
  end
end
