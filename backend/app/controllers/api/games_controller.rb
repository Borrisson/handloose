class Api::GamesController < ApplicationController
  def index
    if session[:user_id]
      @games = Game.where user_id: session[:user_id]
      render json: @games
    else
      @games = Game.where user_id: params[:user_id]
      render json: @games
    end
  end

  def create
    Game.create(game_params)
  end

  private

  def game_params
    params.require(:game).permit(:score, :key_stroke_frequency, :longest_streak, :user_id)
  end
end
