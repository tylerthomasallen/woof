class RemoveDogTypeIdColumnFromTypes < ActiveRecord::Migration[5.2]
  def change
    remove_column :types, :dog_type_id
  end
end
