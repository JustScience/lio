class PagesController < ApplicationController
	# before_action :set_project, only: [:ux, :pm]

	def ux
		@projects = Project.all
	end
	
	def pm
		@projects = Project.all
	end
	
	def ad
	end
	
	def ep
	end
	
	def pd
	end
	
	def gd
	end
	
	def contact
	end
	
	private
		# Use callbacks to share common setup or constraints between actions.
		def set_project
		  @project = Project.find(params[:id])
		end


end