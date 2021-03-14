class AddGamesRefToHits < ActiveRecord::Migration[6.1]
  def change
    add_reference :hits, :games, null: false, foreign_key: true
  end
end
