class Api::AccuraciesController < ApplicationController
  def index
    @accuracies
    if params[:user_id]
      @accuracies = Accuracy.where game_id: params[:game_id]
    else
      @accuracies = Accuracy.joins(:game).where({ game: { user_id: session[:user_id] } })
    end
    render json: @accuracies
  end

  def create
    Accuracy.create(accuracy_params)
  end

  private

  def accuracy_params
    params.require(:accuracy).permit(:character, :hit, :game_id)
  end
end
