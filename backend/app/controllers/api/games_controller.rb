class Api::GamesController < ApplicationController
  def index
    @games = Game.find params[:user_id]
  end

  def create
    @game = Game.create(game_params)
  end

  private

  def game_params
    params.require(:game).permit(:score, :key_stroke_frequency, :longest_streak, :user_id)
  end
end
