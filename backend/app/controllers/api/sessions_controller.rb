class Api::SessionsController < ApplicationController
  skip_before_action :require_login, only: [:create]

  def create
    @user = User
      .find_by(email: params["user"]["email"])
      .try(:authenticate, params["user"]["password"])

    if @user
      session[:user_id] = @user.id
      @games = Game.where user_id: session[:user_id]
      @accuracies = Accuracy.joins(:game).where({ game: { user_id: session[:user_id] } })
      render json: {
        status: :created,
        user: @user,
        games: @games,
        accuracies: @accuracies,
      }
    else
      render json: { status: 401, message: "Email and/or password does not match our records" }
    end
  end

  def destroy
    session[:user_id] = nil
  end
end
