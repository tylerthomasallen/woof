class Review < ApplicationRecord
  validates :body, :rating, presence: true
  validates :rating, inclusion: { in: 1..5 }

  belongs_to :dog,
    foreign_key: :dog_id,
    class_name: :Dog

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User
end
