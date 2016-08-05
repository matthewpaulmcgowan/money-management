class ItemsController < ApplicationController

  def index
    @user = current_user
    @items = @user.items.all
    render json: @items
  end

  def create
    @item = Item.create(name: params[:item][:name],amount: params[:item][:amount],category: params[:item][:category], user_id: params[:userId])
    render json: @item
  end

  def show
    @item = Item.find(params[:id].to_i)
    render json: @item
  end

  def update
    @item = Item.find(params[:id])
    @item.update(item_edit_params)
    render json: @item
  end

  def destroy
    @item = Item.find(params[:id])
    @item.delete
    render json: {}
  end

private

  def item_edit_params
    params.require(:item).permit(:name, :amount, :category)
  end

end
