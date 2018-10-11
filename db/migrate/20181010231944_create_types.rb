class CreateTypes < ActiveRecord::Migration[5.2]
  def change
    create_table :types do |t|
      t.string :name, null: false
      t.integer :dog_type_id, null: false
      t.timestamps
    end
    add_index :types, :name, unique: true
    add_index :types, :dog_type_id
  end
end
