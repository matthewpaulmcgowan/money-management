class User < ActiveRecord::Base
  has_many :items
  has_secure_password
  validates :username, uniqueness: true
end
