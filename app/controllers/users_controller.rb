class UsersController < ApplicationController

  def home
    render :index
  end

  def login
    binding.pry
  end

  def signup
    @user = User.new(username: params[:username], password: params[:password])
    if @user.valid?
      @user.save
      render json: @user
    else
      binding.pry
      render json: {}
    end
  end

end
