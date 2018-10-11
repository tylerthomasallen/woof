class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.text :body, null: false
      t.float :rating, null: false
      t.integer :dog_id, null: false
      t.integer :user_id, null: false
      t.timestamps
    end
    add_index :reviews, :dog_id
    add_index :reviews, :user_id
  end
end
