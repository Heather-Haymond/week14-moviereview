import React, { useState } from 'react';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';
import Stars from './Stars';

const Movie = ({ movie }) => {
  const [reviews, setReviews] = useState(movie.reviews || []);

  const addReview = (review) => {
    setReviews([...reviews, review]);
  };

  return (
    <div>
      <h2>this is a test</h2>
      {/* <h2>{movie.title}</h2> */}
      {/* <img src={movie.image} alt={movie.title} /> */}
      {/* <Stars rating={movie.rating} /> */}
      {/* <ReviewList reviews={reviews} /> */}
      {/* <ReviewForm addReview={addReview} /> */}
    </div>
  );
};

export default Movie;
