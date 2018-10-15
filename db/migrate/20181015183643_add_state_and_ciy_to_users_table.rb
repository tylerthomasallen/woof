class AddStateAndCiyToUsersTable < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :state, :string, :default => 'CA'
    add_column :users, :city, :string, :default => 'San Francisco'
  end
end
