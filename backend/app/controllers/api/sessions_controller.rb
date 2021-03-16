class Api::SessionsController < ApplicationController
  def create
    if @user = User.authenticate_with_credentials(params[:email], params[:password])
      session[:user_id] = @user.id
      render json: {
        status: :created,
        logged_in: "true",
        user: @user.name,
      }
    else
      render json: { status: 401 }
    end
  end

  def destroy
    @user = user.find(params[:id])
    @user.destory
  end
end
