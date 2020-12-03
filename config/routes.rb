Rails.application.routes.draw do

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get "/how-it-works", to: "static#how_it_works"
  get "/users/register", to: "users#register"
  get "/users/account/:id", to: "users#account"
  get "/search", to: "search#index"

  resources :products, except: [:new, :edit]
  root "static#home"
end
