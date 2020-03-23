class Api::GamesController < Api::BaseController
  def create
    game = Game.create!
    render json: { token: game.token }, status: :created
  end
end
