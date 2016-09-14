class Todo < ApplicationRecord
  validates :body, presence: true

  scope :state_active, -> { where(completed: true) }
  scope :state_completed, -> { where(completed: false) }
end
