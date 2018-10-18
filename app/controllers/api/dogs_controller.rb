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
    # @search_info = params['searchInfo']
    # @dogs = Dog.where("name like ?", "%#{@search_info}%")
    # @types = Type.where("name like ?", "%#{@search_info}%")

    @dogs = Dog.all
    @types = Type.all
    @dog_types = DogType.all
    render "api/dogs/index"
  end

end
