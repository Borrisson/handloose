class Api::GamesController < ApplicationController

  def create
    @game = Game.create(game_params)
  end

end
