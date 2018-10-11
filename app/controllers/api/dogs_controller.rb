class Api::DogsController < ApplicationController

  def show
    debugger
    @dog = Dog.find(params[:id])
    debugger
    if @dog
      debugger
      render "api/dogs/show"
    else
      render json: ['No dog found'], status: 404
    end
  end

  def index
  end


end
