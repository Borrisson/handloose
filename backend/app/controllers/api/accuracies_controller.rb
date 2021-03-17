class Api::AccuraciesController < ApplicationController
  def index
    @accuracies = Accuracy.where game_id: params[:game_id]
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
