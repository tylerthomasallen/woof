Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resource :user, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :dogs, only: [:show, :index]
    resources :reviews, only: [:create, :edit, :delete]
  end
end
