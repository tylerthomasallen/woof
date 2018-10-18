class AddColumnsToDogTable < ActiveRecord::Migration[5.2]
  def change
    add_column :dogs, :confident, :boolean, :default => true
    add_column :dogs, :timid, :boolean, :default => true
    add_column :dogs, :laidback, :boolean, :default => true
    add_column :dogs, :friendly, :boolean, :default => true
    add_column :dogs, :adaptable, :boolean, :default => true
    add_column :dogs, :independent, :boolean, :default => true
    add_column :dogs, :small, :boolean, :default => false
    add_column :dogs, :medium, :boolean, :default => false
    add_column :dogs, :large, :boolean, :default => false
    add_column :dogs, :high_energy, :boolean, :default => true
  end
end
