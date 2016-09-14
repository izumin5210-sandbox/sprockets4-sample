Rails.application.routes.draw do
  get "/todos", to: "todos#index"

  namespace :api do
    resources :todos, only: %i(index create) do
      member do
        put :complete
        delete :incomplete, path: :complete
      end
    end
  end
end
