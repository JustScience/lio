Rails.application.routes.draw do

	root 'pages#ux'

	get '/ux', to: 'pages#ux', as: 'ux'
	get '/pm', to: 'pages#pm', as: 'pm'
	get '/contact', to: 'pages#contact', as: 'contact'

end
