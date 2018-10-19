class Api::TypesController < ApplicationController

  def show
    @temp_type = Type.find(params[:id])

    @dogs = @temp_type.dogs
    @dogTypes = @temp_type.dog_types

    @type = []
    @type << @temp_type

    if @temp_type
      render "api/types/show"
    else
      render json: ['No type found'], status: 404
    end
  end
end
