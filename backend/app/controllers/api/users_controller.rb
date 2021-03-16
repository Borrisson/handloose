class Api::UsersController < ApplicationController

	def index
		current_user = User.find_by_id(session[:current_user_id])
	end

	def show
    @user = User.find(params[:id])
    render json: @user
  end

  def create
    user= User.create!(
      name: params['user']['name'],
      email: params['user']['email'],
      password: params['user']['password'],
      password_confirmation: params['user']['password_confirmation']
    )

    if user
      session[:user_id] = user.id
      render json: {
        status: :created,
        user: user
    }
  else
    render json: { status: 500 }
    end
  end

  def update
    @user = User.find(params[:id])
    @user.update(user_params)
    render json: @user
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end

end
