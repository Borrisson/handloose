Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api do
    resources :users, except: [:destroy, :update]
    resources :sessions, only: [:create, :destroy]
    resources :games, except: [:destroy, :update]
  end


end
