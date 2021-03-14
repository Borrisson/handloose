class GamesController < ApplicationController

  def create
    @game = Game.create(game_params)
  end

end
