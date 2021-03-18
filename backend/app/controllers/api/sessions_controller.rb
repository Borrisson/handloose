class Api::SessionsController < ApplicationController
  skip_before_action :require_login, only: [:create]

  def create
    @user = User
      .find_by(email: params["user"]["email"])
      .try(:authenticate, params["user"]["password"])

    if @user
      session[:user_id] = @user.id
      @games = Game.where(user_id: session[:user_id]).order("score DESC").limit(10)
      @accuracies = @games.each do |game|
        Accuracy.where(game_id: game.id)
      end

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
