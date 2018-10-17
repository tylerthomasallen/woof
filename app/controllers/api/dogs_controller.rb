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
    @dogs = Dog.take(4)
    render "api/dogs/index"
  end

end
