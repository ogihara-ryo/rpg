Rails.application.routes.draw do
  root 'home#index'

  namespace :api do
    resources :games, only: :create
  end
end
