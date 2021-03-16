class Api::SessionsController < ApplicationController
  def create
    user = User
      .find_by(email: params["user"]["email"])
      .try(:authenticate, params["user"]["password"])

    if user
      session[:user_id] = user.id
      render json: {
        status: :created,
        logged_in: "true",
        user: user.name,
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
