class Api::TodosController < Api::BaseController
  include Garage::RestfulActions

  def require_resources
    @resources = Todo.all
  end

  def require_resource
    @resource = Todo.find(params[:id])
  end

  def create_resource
    @resource = @resources.new(todo_params)
    @resource.save!
    @resource
  end

  def update_resource
    @resource.update_attributes!(todo_params)
    @resource
  end

  def destroy_resource
    @resource.destroy!
  end

  private

  def todo_params
    params.permit(:body, :completed)
  end
end
