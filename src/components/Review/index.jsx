import React from 'react';
import "./styles.css"

const Review = (props) => {
    return (
        <div className="review">{ props.children }</div>
    );
};

export default Review;