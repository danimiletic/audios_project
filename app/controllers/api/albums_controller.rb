class Api::AlbumsController < ApplicationController
  before_action :set_artist
  before_action :set_album, only: [:show, :update, :destroy]

  def index 
    render json: @artist.albums
  end

  def show
    render json: @album
  end

  def create 
    @game = @artist.albums.new(albu _params)
    if @album.save
      render json: @album
    else
      render json: { errors: @album.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @album.update(album_params)
      render json: @album
    else
      render json: { errors: @album.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @album.destroy
    render json: { message: "Album deleted" }
  end

  private
    def album_params
      params.require(:album).permit(:name, :image, :duration, :released)
    end

    def set_artist
      @artist = Artist.find(params[:artist_id])
    end

    def set_album
      @album = @artist.albums.find(params[:id])
    end
end
