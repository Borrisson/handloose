class Api::GamesController < ApplicationController
  skip_before_action :require_login, only: [:index]

  def index
    @leaderboard
    @games
    @accuracies
    if params[:user_id]
      @games = Game.where(user_id: params[:user_id])
        .order("score DESC")
        .limit(10)
      @accuracies = Accuracy.where(game_id: @games.ids)

      render json: {
        status: :ok,
        games: @games,
        accuracies: @accuracies,
      }
    elsif required_query_params
      leaderboard_query_mappings = {
        "score_asc" => "score ASC",
        "score_desc" => "score DESC",
      }

      sanitize_order_by = leaderboard_query_mappings[game_query[:order_by]]

      @leaderboard = Game.joins(:user)
        .select("games.*, users.name")
        .order(sanitize_order_by)
        .limit(game_query[:limit].to_i)

      render json: {
        status: :ok,
        leaderboard: @leaderboard,
      }
    else
      @games = Game.all
      @accuracies = Accuracy.all

      render json: {
        status: :ok,
        games: @games,
        accuracies: @accuracies,
      }
    end
  end

  def create
    Game.create(game_params)
  end

  private

  def game_params
    params.require(:game)
      .permit(:score, :key_stroke_frequency, :longest_streak, :user_id)
  end

  def game_query
    params.permit(:score, :key_stroke_frequency, :longest_streak, :user_id, :order_by, :direction, :limit)
  end

  def required_query_params
    request.query_parameters[:order_by] && request.query_parameters[:limit]
  end
end
