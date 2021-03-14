class AddPropertiesToHits < ActiveRecord::Migration[6.1]
  def change
    add_column :hits, :character, :string
  end
end
