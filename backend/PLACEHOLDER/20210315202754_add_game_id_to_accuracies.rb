class AddGameIdToAccuracies < ActiveRecord::Migration[6.1]
  def change
    add_reference :accuracies, :game, index: true, foreign_key: true
  end
end
