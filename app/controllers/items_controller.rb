class ItemsController < ApplicationController

  def index
    @user = current_user
    @items = @user.items.all
    render json: @items
  end

  def create
    @user = current_user
    @item = @user.items.create(item_params)
    render json: @item
  end

  def show
    @item = Item.find(params[:id].to_i)
    render json: @item
  end

  def update
    @item = Item.find(params[:id])
    @item.update(item_params)
    render json: @item
  end

  def destroy
    @item = Item.find(params[:id])
    @item.delete
    render json: {}
  end

  def edit
    binding.pry
  end


private

  def item_params
    params.require(:item).permit(:name, :amount, :category)
  end

end
