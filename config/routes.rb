Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do
    resources :platforms do 
      resources :artists do
        resources :albums
      end
    end
  end
end
