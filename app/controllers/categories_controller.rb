class CategoriesController < ApplicationController

  def index
    @user = current_user
    @amount_total = {}
    @user.categories.each do |category|
      binding.pry
      @total = category.get_amount_total(@user.id)
      binding.pry
      @amount_total[:'#{category.name}'] = @total
    end
    render json: {}
  end

end
