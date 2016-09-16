class Todo < ApplicationRecord
  validates :body, presence: true

  scope :state_active, -> { where(completed: true) }
  scope :state_completed, -> { where(completed: false) }

  def to_resource
    TodoResource.new(self)
  end
end
