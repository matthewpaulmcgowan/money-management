class ItemsController < ApplicationController
  #skip_before_filter :verify_authenticity_token
  def index
    @items = Item.all
    render json: @items
  end

  def create
    @item = Item.create(name: params[:item][:name])
    @items = Item.all
    render json: {}
  end

  def options
    binding.pry
  end

  def show
    binding.pry
  end
end
