import React from 'react';
import ReviewInput from "../ReviewInput";
import Review from "../Review";
import "./styles.css";

const ReviewList = ({ reviews, onAddReview }) => {
    return (
        <div className="review-list">
            <ReviewInput onAddReview={onAddReview}/>
            {reviews.map(review => (<Review> {review}</Review>))}
        </div>
    )
};

export default ReviewList;