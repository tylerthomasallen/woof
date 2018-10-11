class User < ApplicationRecord
  validates :email, :session_token, :password_digest, :first_name, :last_name, :zipcode, presence: true
  validates :email, :session_token, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  has_many :reviews,
    foreign_key: :user_id,
    class_name: :Review

  attr_reader :password
  after_initialize :ensure_session_token

  def self.find_by_credentials(email, pw)
    user = User.find_by(email: email)
    return nil unless user && user.valid_password?(pw)
    user
  end

  def valid_password?(pw)
    BCrypt::Password.new(self.password_digest).is_password?(pw)
  end

  def password=(pw)
    @password = pw
    self.password_digest = BCrypt::Password.create(pw)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def reset_session_token
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end
end
