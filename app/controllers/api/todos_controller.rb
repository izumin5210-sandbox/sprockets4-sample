class Api::TodosController < ActionController::API
  before_action :set_todo, only: %i(destroy complete incomplete)

  def index
    @todos = Todo.all
    render json: @todos.to_json
  end

  def create
    @todo = Todo.create!(todo_params)
    render json: @todo
  end

  def destroy
    @todo.destroy!
    render json: @todo
  end

  def complete
    @todo.update!(completed: true)
    render json: @todo
  end
  
  def incomplete
    @todo.update!(completed: false)
    render json: @todo
  end

  private

  def set_todo
    @todo = Todo.find(params[:id])
  end

  def todo_params
    params.permit(:body)
  end
end
