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
    debugger;
    @review = Review.find(params[:id])
    debugger;

    if @review.update(review_params)
      debugger;
      render "api/reviews/show"
    else
      render json: @review.errors.full_messages, status: 404
    end
  end

  def delete
  end

  def review_params
    params.require(:review).permit(:body, :rating, :dog_id, :user_id)
  end
end
