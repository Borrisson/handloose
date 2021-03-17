class Api::GamesController < ApplicationController
  def index
    @games
    if params[:user_id]
      @games = Game.where user_id: params[:user_id]
    else
      @games = Game.where user_id: session[:user_id]
    end
    render json: @games
  end

  def create
    Game.create(game_params)
  end

  private

  def game_params
    params.require(:game).permit(:score, :key_stroke_frequency, :longest_streak, :user_id)
  end
end
