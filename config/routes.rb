Rails.application.routes.draw do

  resources :projects
	root 'pages#ux'

	get '/ux', to: 'pages#ux', as: 'ux'
	get '/pm', to: 'pages#pm', as: 'pm'
	get '/ad', to: 'pages#ad', as: 'ad'
	get '/ep', to: 'pages#ep', as: 'ep'
	get '/pd', to: 'pages#pd', as: 'pd'
	get '/gd', to: 'pages#gd', as: 'gd'
	get '/contact', to: 'pages#contact', as: 'contact'

end
