class Api::SessionsController < ApplicationController
  def create
    user = User
      .find_by(email: params["user"]["email"])
      .try(:authenticate, params["user"]["password"])

    if user
      session[:user_id] = user.id
      render json: {
        status: :created,
        user: user,
      }
    else
      render json: { status: 401, message: "Email and/or password does not match our records" }
    end
  end

  def destroy
    session[:user_id] = nil
  end
end
