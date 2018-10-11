class DogType < ApplicationRecord

  belongs_to :dog,
    foreign_key: :dog_id,
    class_name: :Dog

  belongs_to :type,
    foreign_key: :type_id,
    class_name: :Type

end
