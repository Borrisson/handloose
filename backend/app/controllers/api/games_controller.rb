class Api::GamesController < ApplicationController
  skip_before_action :require_login, only: [:create]

  def index
    @games
    @accuracies
    if params[:user_id]
      @games = Game.where(user_id: params[:user_id]).order("score DESC").limit(10)
      @accuracies = Accuracy.where(game_id: @games.ids)
    elsif required_query_params
      @games = Game.joins(:user).select("games.*, users.name").order("#{game_query[:order_by]} desc").limit(game_query[:limit].to_i)
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

  def game_query
    params.permit(:score, :key_stroke_frequency, :longest_streak, :user_id, :order_by, :direction, :limit)
  end

  def required_query_params
    request.query_parameters[:order_by] && request.query_parameters[:limit]
  end
end
