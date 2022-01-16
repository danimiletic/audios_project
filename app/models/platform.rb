class Platform < ApplicationRecord
  belongs_to :user
  has_many :artists, dependent: :destroy 
  validates :name, :purchased, :model, :image, presence: true
end
