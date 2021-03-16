class Api::SessionsController < ApplicationController
  def create
    if @user = User
      .find_by(email: params["user"]["email"])
      .try(:authenticate, params["user"]["password"])
      session[:user_id] = @user.id
      render json: {
        status: :created,
        user: @user,
      }
    else
      render json: { status: 401 }
    end
  end

  def destroy
    session[:user_id] = nil
  end
end
