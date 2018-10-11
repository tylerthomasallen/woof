class CreateDogTypes < ActiveRecord::Migration[5.2]
  def change
    create_table :dog_types do |t|
      t.integer :dog_id, null: false
      t.integer :type_id, null: false
      t.timestamps
    end
    add_index :dog_types, :dog_id
    add_index :dog_types, :type_id
  end
end
