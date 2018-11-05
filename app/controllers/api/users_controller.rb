class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    
    dumbledore_photo = File.open("app/assets/images/photos/users/dumbledore.jpg")
    @user.photo.attach(io: dumbledore_photo, filename: 'dumbledore.jpg')


    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password, :zipcode)
  end

  def show
    @user = User.find(params[:userId])
    if @user
      render "api/users/show"
    else
      render json: ['No user found'], status: 404
    end
  end
end
