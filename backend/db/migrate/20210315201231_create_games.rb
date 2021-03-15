class CreateGames < ActiveRecord::Migration[6.1]
  def change
    create_table :games do |t|
      t.integer :score
      t.integer :key_stroke_frequency
      t.integer :longest_streak

      t.timestamps
    end
  end
end
