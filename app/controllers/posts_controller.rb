class PostsController < ApplicationController
  before_action :set_post, only: [:show, :edit, :update, :destroy]
  before_action :post_updateparams, only: [:update]
  respond_to :json

  def index
    @posts = Post.all
    @presenter = {
      :posts => Post.last(5),
      :form => {
        :action => posts_path,
        :csrf_param => request_forgery_protection_token,
        :csrf_token => form_authenticity_token
      }
    }
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      render :json => Post.last(5)
    else
      redirect_to posts_path
    end
  end

  def edit
  end

  def show
  end

  def new
    @post = Post.new
  end

  def edit
  end

  def update
    respond_to do |format|
      if @post.update(post_updateparams)
        format.html { redirect_to @post, notice: 'Post was successfully updated.' }
        format.json { render :show, status: :ok, location: @post }
      else
        format.html { render :edit }
        format.json { render json: @post.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @post.destroy
    respond_to do |format|
      format.html { redirect_to posts_url, notice: 'Post was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    def set_post
      @post = Post.find(params[:id])
    end

    def post_params
      params.require(:post).permit(:title, :body, :published, :published_by)
    end

    def post_updateparams
      params.permit(:title, :body, :published, :published_by)
    end
end
