class Hit < ApplicationRecord
  validates :character, length: { is: 1 }
end
