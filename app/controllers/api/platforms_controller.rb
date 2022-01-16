class Api::PlatformsController < ApplicationController
  before_action :set_platform, only: [:show, :update, :destroy]

  def index
    render json: current_user.platforms
  end

  def show
    render json: @platform
  end

  def create
    @platform = current_user.platforms.new(platform_params)
    if @platform.save
      render json: @platform
    else
      render json: { errors: @platform.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @platform.update(platform_params)
      render json: @platform
    else
      render json: { errors: @platform.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @platform.destroy
    render json: { message: "Platform deleted" }
  end

  private 

    def platform_params
      params.require(:platform).permit(:name, :purchased, :model, :image)
    end

    def set_platform
      @platform = current_user.platforms.find(params[:id])
    end
end