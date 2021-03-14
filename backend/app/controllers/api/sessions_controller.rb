class SessionsController < ApplicationController

  def create
    session[:current_user_id] = @user.id
  end

  def destroy
    @user = user.find(params[:id])
    @user.destory
  end
end
