class Api::GamesController < ApplicationController
  def index
    @games
    @accuracies
    if params[:user_id]
      @games = Game.where(user_id: params[:user_id]).order("score DESC").limit(10)
      @accuracies = Accuracy.where(game_id: @games.ids)
    else
      @games = Game.all
      @accuracies = Accuracy.all
    end
    render json: {
             status: :ok,
             games: @games,
             accuracies: @accuracies,
           }
  end

  def create
    Game.create(game_params)
  end

  private

  def game_params
    params.require(:game).permit(:score, :key_stroke_frequency, :longest_streak, :user_id)
  end
end
