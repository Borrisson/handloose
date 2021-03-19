class Api::AccuraciesController < ApplicationController
  skip_before_action :require_login, only: [:create]

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
    unless params[:accuracies].empty?
      Accuracy.create(accuracies_params)
    else
      Accuracy.create(accuracy_params)
    end
  end

  private

  def accuracy_params
    params.require(:accuracy).permit(:character, :hit, :game_id)
  end

  def accuracies_params
    params.permit(accuracies: [:character, :hit, :game_id]).require(:accuracies)
  end
end
