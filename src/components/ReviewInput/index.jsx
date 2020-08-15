import React, {useState} from 'react';
import "./styles.css";

const ReviewInput = ({ onAddReview }) => {
    const [review, setReview] = useState("");
    const sendReview = (e) => {
        if (!review) return;
        onAddReview(review);
        setReview("");
    };
    return (
        <div className="review-form">
            <input className="review-input" type="text" value={review} onChange={e => setReview(e.target.value)}/>
            <button type="button" onClick={sendReview}>Send Review</button>
        </div>
    )
};

export default ReviewInput;