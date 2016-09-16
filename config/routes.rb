Rails.application.routes.draw do
  get "/todos", to: "todos#index"

  namespace :api, format: "json" do
    resources :todos
  end
end
