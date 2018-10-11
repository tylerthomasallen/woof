class Type < ApplicationRecord
  validates :name, presence: true, uniqueness: true

  has_many :dogs,
    foreign_key: :type_id,
    class_name: :DogType

  def self.find_by_name(name)
    type = Type.find_by(name: name)
    type ? type : nil
  end
end
