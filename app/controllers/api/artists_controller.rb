class Api::ArtistsController < ApplicationController
  before_action :set_platform
  before_action :set_artist, only: [:show, :update, :destroy]

  def index 
    render json: @platform.artists
  end

  def show
    render json: @artist
  end

  def create 
    @artist = @platform.artists.new(artist_params)
    if @artist.save
      render json: @artist
    else
      render json: { errors: @artist.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @artist.update(artist_params)
      render json: @artist
    else
      render json: { errors: @artist.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @artist.destroy
    render json: { message: "Artist deleted" }
  end

  private
    def artist_params
      params.require(:artist).permit(:name, :image, :active)
    end

    def set_platform
      @platform = Platform.find(params[:platform_id])
    end

    def set_artist
      @artist = @platform.artists.find(params[:id])
    end
end