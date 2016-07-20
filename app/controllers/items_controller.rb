class ItemsController < ApplicationController

  def index
    @items = Item.all
    render json: @items
  end

  def create
    binding.pry
  end

  def options
    binding.pry
  end
end
