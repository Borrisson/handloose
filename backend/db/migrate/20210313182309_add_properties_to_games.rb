class AddPropertiesToGames < ActiveRecord::Migration[6.1]
  def change
    add_column :games, :score, :integer
    add_column :games, :key_stroke_frequency, :integer
    add_column :games, :longest_streak, :integer
  end
end
