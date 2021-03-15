class CreateAccuracies < ActiveRecord::Migration[6.1]
  def change
    create_table :accuracies do |t|
      t.string :character, null: false
      t.boolean :hit, null: false

      t.timestamps
    end
  end
end
