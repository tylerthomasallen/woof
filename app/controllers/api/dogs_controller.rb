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
    @search_info = params['searchInfo']
    @dogs = Dog.where("lower(name) like lower(?)", "%#{@search_info}%")
    @types = Type.where("lower(name) like lower(?)", "%#{@search_info}%")
    
    render "api/dogs/index"
  end

end
