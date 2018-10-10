class Dog < ApplicationRecord
  validates :name, :address_line_one, :zip_code, :state, :city, :lat, :lng, presence: true
  validates :name, :address_line_one, [:lat, :lng], uniqueness: true
end
