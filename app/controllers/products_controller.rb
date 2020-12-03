class ProductsController < ApplicationController
  before_action :set_product, only: [:show, :edit, :update, :destroy]

  def index
    @products = Product.all.order(created_at: :desc)
  end

  def show
  end

  def create
    @product = Product.create(product_params)

    if @product.save
      render :show, status: :created
    else
      render json: @product.errors, status: :unprocessable_entity
    end
  end

  def update
    if @product.update(product_params)
      render :show
    else
      render json: @product.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @product.destroy
  end

  private

  def set_product
    # @product = Product.find(params[:id])
  end

  def product_params
    params.require(:product).permit(:title, :description, :price, :featured_image, { image_gallery: [] }, :category, :selling_option, :shipping_option, :sub_category)
  end
end
