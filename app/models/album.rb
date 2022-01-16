class Album < ApplicationRecord
  belongs_to :artist

  validates :name, :image, :duration, :released, presence: true 
end
