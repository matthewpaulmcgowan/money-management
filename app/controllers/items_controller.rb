class ItemsController < ApplicationController

  def index
    @user = current_user
      if @user
        @items = @user.items.all
        render json: @items
      else
        render json: {}
      end
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
    @item = Item.find_by(id: params[:id])
    binding.pry
    if @item
      render json: @item
    else
      render json: {}
    end
  end


private

  def item_params
    params.require(:item).permit(:name, :amount, :category)
  end

end
