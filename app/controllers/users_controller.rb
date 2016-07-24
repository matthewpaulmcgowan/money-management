class UsersController < ApplicationController

  def home
    render :index
  end

  def login
    @user = User.find_by(username: params[:username])
    if @user.authenticate(params[:password])
      render json: @user
    else
      render json: {}
    end
  end

  def signup
    @user = User.new(username: params[:username], password: params[:password])
    if @user.valid?
      @user.save
      render json: @user
    else
      render json: {}
    end
  end

end
