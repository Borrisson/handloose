class Accuracy < ApplicationRecord
  belongs_to :game

  validates :character, length: { is: 1 }, presence: true
  validates :hit, presence: true
end
