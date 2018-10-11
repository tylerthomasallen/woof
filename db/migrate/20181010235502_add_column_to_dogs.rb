class AddColumnToDogs < ActiveRecord::Migration[5.2]
  def change
    add_column :dogs, :temperment, :string, null: false
  end
end
