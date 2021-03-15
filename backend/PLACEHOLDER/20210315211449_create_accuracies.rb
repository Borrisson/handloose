class CreateAccuracies < ActiveRecord::Migration[6.1]
  def change
    create_table :accuracies do |t|
      t.timestamps
    end
  end
end
