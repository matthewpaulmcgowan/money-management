class ItemsController < ApplicationController
  #skip_before_filter :verify_authenticity_token
  def index
    @items = Item.all
    render json: @items
  end

  def create
    @item = Item.create(name: params[:item][:name])
    binding.pry
  end

  def options
    binding.pry
  end
end
