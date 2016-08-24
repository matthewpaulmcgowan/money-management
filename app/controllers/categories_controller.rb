class CategoriesController < ApplicationController

  def index
    @user = current_user
    @user_category_totals = @user.calculate_Category_totals
    render json: @user_category_totals
  end

end
