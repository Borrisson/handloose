class Api::SessionsController < ApplicationController
  skip_before_action :require_login, only: [:create]

  def create
    @user = User
      .find_by(email: params["user"]["email"])
      .try(:authenticate, params["user"]["password"])

    if @user
      session[:user_id] = @user.id
      @games = Game.where(user_id: session[:user_id]).order("score DESC").limit(10)
      @accuracies = Accuracy.where(game_id: @games.ids)
      @leaderboard = Game.joins(:user).select("games.*, users.name").order(score: :desc).limit(10)

      render json: {
        status: :created,
        user: @user,
        games: @games,
        accuracies: @accuracies,
        leaderboard: @leaderboard
      }
    else
      render json: { status: 401, message: "Email and/or password does not match our records" }
    end
  end

  def destroy
    session[:user_id] = nil
  end
end
