class CreateMisses < ActiveRecord::Migration[6.1]
  def change
    create_table :misses do |t|

      t.timestamps
    end
  end
end
