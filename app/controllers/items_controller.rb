class ItemsController < ApplicationController

  def index
    @user = User.find(params[:userId])
    @items = @user.items.all
    render json: @items
  end

  def create
    @item = Item.create(name: params[:item][:name], user_id: params[:userId])
    render json: {}
  end

  #def options
  #  binding.pry
  #end

  def show
    @item = Item.find(params[:id].to_i)
    render json: @item
  end

  def update
    @item = Item.find(params[:id])
    @item.update(name: params[:item][:name])
    render json: @item
  end

  def destroy
    @item = Item.find(params[:id])
    @item.delete
    render json: {}
  end

end
