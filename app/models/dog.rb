class Dog < ApplicationRecord
  validates :name, :address_line_one, :zip_code, :state, :city, :lat, :lng, presence: true
  validates :name, :address_line_one, uniqueness: true
  validates :hypoallergenic, :sheds, :good_with_kids, inclusion: { in: [true, false]}

  has_many :dog_types,
    foreign_key: :dog_id,
    class_name: :DogType

  has_many :types,
    through: :dog_types,
    source: :type

  after_initialize :set_defaults

  def set_defaults
    self.hypoallergenic ||= false
    self.sheds ||= false
    self.good_with_kids ||= false
  end
end
