class CategoriesController < ApplicationController

  def index
    @user = current_user
    @amount_total = {}
    @user.categories.uniq.each do |category|
      @total = category.get_amount_total(@user.id)
      @amount_total[category.name] = @total
    end
    render json: @amount_total 
  end

end
