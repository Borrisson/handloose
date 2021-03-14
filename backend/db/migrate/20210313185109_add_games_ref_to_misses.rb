class AddGamesRefToMisses < ActiveRecord::Migration[6.1]
  def change
    add_reference :misses, :games, null: false, foreign_key: true
  end
end
