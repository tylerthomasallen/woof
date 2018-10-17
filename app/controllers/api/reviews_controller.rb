class Api::ReviewsController < ApplicationController

  def create
    debugger
    @review = Review.new(review_params)

    if @review.save
      debugger
      render "api/reviews/show"
    else
      render json: @review.errors.full_messages, status: 401
    end

  end

  def edit

  end

  def delete
  end

  def review_params
    params.require(:review).permit(:body, :rating, :dog_id, :user_id)
  end
end
