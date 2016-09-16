class TodoResource
  include Garage::Representer
  include Garage::Authorizable

  property :id
  property :body
  property :completed

  delegate *%i(id body completed), to: :@model

  def initialize(model)
    @model = model
  end
end
