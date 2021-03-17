class ApplicationController < ActionController::API
  before_action :require_login

  private

  def require_login
    unless session[:user_id]
      render json: { status: 401, message: "Please login to be able to reach this domain" }
    end
  end
end
