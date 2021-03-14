class CreateHits < ActiveRecord::Migration[6.1]
  def change
    create_table :hits do |t|

      t.timestamps
    end
  end
end
