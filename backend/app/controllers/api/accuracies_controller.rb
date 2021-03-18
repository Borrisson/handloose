class Api::AccuraciesController < ApplicationController
  def index
    @accuracies
    if params[:game_id]
      @accuracies = Accuracy.where game_id: params[:game_id]
    else
      @accuracies = Accuracy.all
    end
    render json: {
      status: :ok,
      accuracies: @accuracies,
    }
  end

  def create
    Accuracy.create(accuracy_params)
  end

  private

  def accuracy_params
    params.require(:accuracy).permit(:character, :hit, :game_id)
  end
end
