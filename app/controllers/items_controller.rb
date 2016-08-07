class ItemsController < ApplicationController
  before_action :set_category_params, only: [:create]

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
    binding.pry
    @item = @user.items.create(item_params)
    render json: @item
  end

  def update
    @item = Item.find_by(id: params[:id])
    @item.update(item_params)
    render json: @item
  end

  def destroy
    @item = Item.find_by(id: params[:id])
    @item.delete
    render json: {}
  end

  def edit
    @item = Item.find_by(id: params[:id])
    if @item
      render json: @item
    else
      render json: {}
    end
  end

  def set_category_params
    binding.pry
    params[:item][:category_name] = params[:category_name]
  end


private

  def item_params
    params.require(:item).permit(:name, :amount, :category_name)
  end

end
