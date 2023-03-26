import React, { useState } from 'react';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';
import Stars from './Stars';
export const displayText = 'Reviews: ';
const Movie = ({ movie }) => {
  const [reviews, setReviews] = useState(movie.reviews || []);
  console.log(movie.title); 
  console.log(movie.director); 
  

  const addReview = (review) => {
    setReviews([...reviews, review]);
  };

  return (
    <div>
      <h2>{movie.title}</h2> 
      <Stars rating={movie.rating} />
      <ReviewList reviews={reviews} />
      
      <ReviewForm addReview={addReview} />
      <h2>{displayText} </h2>
    </div>
  );
};

export default Movie;

