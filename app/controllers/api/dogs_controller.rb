class Api::DogsController < ApplicationController

  def show
    @dog = Dog.find(params[:id])
    if @dog
      render "api/dogs/show"
    else
      render json: ['No dog found'], status: 404
    end
  end

  def index
    @dogs = Dog.in_bounds(params[:bounds])
  end


end
