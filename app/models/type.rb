class Type < ApplicationRecord
  validates :name, presence: true, uniqueness: true

  has_many :dog_types,
    foreign_key: :type_id,
    class_name: :DogType

  has_many :dogs,
    through: :dog_types,
    source: :dog

  def self.find_by_name(name)
    type = Type.find_by(name: name)
    type ? type : nil
  end
end
