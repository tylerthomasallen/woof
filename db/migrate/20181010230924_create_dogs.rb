class CreateDogs < ActiveRecord::Migration[5.2]
  def change
    create_table :dogs do |t|
      t.string :name, null: false
      t.boolean :hypoallergenic, null: false, default: false
      t.boolean :sheds, null: false, default: false
      t.boolean :good_with_kids, null: false, default: false
      t.string :address_line_one, null: false
      t.string :address_line_two
      t.string :zip_code, null: false
      t.string :state, null: false
      t.string :city, null: false
      t.float :lat, null: false
      t.float :lng, null: false
      t.timestamps
    end
    add_index :dogs, :name, unique: true
    add_index :dogs, :address_line_one, unique: true
    add_index :dogs, [:lat, :lng], unique: true
    add_index :dogs, :lng
  end
end
