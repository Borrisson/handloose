class Api::AccuraciesController < ApplicationController
  def index
    if session[:user_id]
      @accuracies = Accuracy.joins(:games).where(user_id: session[:user_id])
      render json: @accuracies
    else
      @accuracies = Accuracy.where game_id: params[:game_id]
      render json: @accuracies
    end
  end

  def create
    Accuracy.create(accuracy_params)
  end

  private

  def accuracy_params
    params.require(:accuracy).permit(:character, :hit, :game_id)
  end
end
