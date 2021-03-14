class AddPropertiesToMisses < ActiveRecord::Migration[6.1]
  def change
    add_column :misses, :character, :string
  end
end
