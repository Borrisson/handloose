class Game < ApplicationRecord

  belongs_to :user

  has_many :hits
  has_many :misses
end
