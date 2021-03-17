class Api::AccuraciesController < ApplicationController
  def index
    @accuracies = Accuracy.wheregame_id: params[:game_id]
    render json: @gaccuracies
  end

  def create
    Accuracy.create(accuracy_params)
  end

	private

  def accuracy_params
    params.require(:accuracy).permit(:character, :hit, :game_id)
  end
end
