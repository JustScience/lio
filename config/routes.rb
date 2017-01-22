Rails.application.routes.draw do

	root 'pages#home'

	get '/home', to: 'pages#home', as: 'home'
	get '/contact', to: 'pages#contact', as: 'contact'

end
