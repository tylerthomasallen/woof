class Api::ReviewsController < ApplicationController

  def create
    @review = Review.new(review_params)

    if @review.save
      render "api/reviews/show"
    else
      render json: @review.errors.full_messages, status: 401
    end

  end

  def edit
    @review = Review.find(params[:id])

    if @review.update(review_params)
      render "api/reviews/show"
    else
      render json: @review.errors.full_messages, status: 404
    end
  end

  def destroy
    @review = Review.find(params[:id])
    @dog = Dog.find(@review.dog_id)
    @review.destroy
    render "api/dogs/show"
  end

  def review_params
    params.require(:review).permit(:body, :rating, :dog_id, :user_id)
  end

end
