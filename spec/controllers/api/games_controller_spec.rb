require 'rails_helper'

RSpec.describe Api::GamesController, type: :controller do
  describe '#create' do
    example 'トークンを返すこと' do
      post :create
      expect(response.code).to eq '201'
      expect(JSON.parse(response.body)).to eq('token' => Game.last.token)
    end
  end
end
