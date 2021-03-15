class CreateAccuracies < ActiveRecord::Migration[6.1]
  def change
    create_table :accuracies do |t|
      t.string :character
      t.boolean :hit
      t.timestamps
    end
  end
end
