class Api::SessionsController < ApplicationController

  def create
    email = params[:user][:email]
    password = params[:user][:password]

    @user = User.find_by_credentials(email, password)

    if @user
      login(@user)
      render "api/users/show"
    else
      render json: ["Invalid login credentials"], status: 401
    end
  end

  def destroy
    debugger
    @user = current_user

    if @user
      debugger
      logout
      render "api/users/show"
    else
      debugger
      render json: ['Nobody signed in'], status: 404
    end
  end
end
