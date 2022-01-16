class Artist < ApplicationRecord
  belongs_to :platform
  has_many :albums, dependent: :destroy
  validates :name, :image, :active, presence: true
end
