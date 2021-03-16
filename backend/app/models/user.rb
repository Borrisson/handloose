class User < ApplicationRecord
  has_many :games

  has_secure_password

  validates :name, presence: true
  validates :email, { presence: true, uniqueness: { case_sensitive: false } }
  validates :password, { presence: true, confirmation: true, length: { in: 6..20 } }
  validates :password_confirmation, presence: true

  def self.authenticate_with_credentials(email, password)
    User.find_by_email(email).try(:authenticate, password)
  end
end
