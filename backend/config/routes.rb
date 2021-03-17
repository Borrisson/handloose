Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api do
    resources :users, except: [:destroy, :update] do
      resources :games, except: [:destroy, :update, :show] do
        resources :accuracies, except: [:destroy, :update, :show]
      end
    end
    resources :games, except: [:destroy, :update, :show]
    resources :sessions, only: [:create, :destroy]
    resources :accuracies, except: [:destroy, :update, :show]
  end
end
