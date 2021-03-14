class Miss < ApplicationRecord

  belongs_to :game

  validates :character, length: { is: 1 }
end
