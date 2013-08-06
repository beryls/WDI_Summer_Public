AjaxTodo::Application.routes.draw do
	# STEP 4 - Create routes required for TasksController
  root to: 'tasks#index'
  post '/create', to: 'tasks#create'
  put '/complete/:id', to: 'tasks#complete'
  put '/restore/:id', to: 'tasks#restore'
  delete '/destroy/:id', to: 'tasks#destroy'
end
