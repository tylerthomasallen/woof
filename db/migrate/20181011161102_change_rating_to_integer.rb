class ChangeRatingToInteger < ActiveRecord::Migration[5.2]
  def change
    change_column :reviews, :rating, :integer
  end
end
