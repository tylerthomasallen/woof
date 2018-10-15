class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)

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
