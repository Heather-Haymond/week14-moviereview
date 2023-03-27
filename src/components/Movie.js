import React, { useState } from "react";
import ReviewList from "./ReviewList";
import ReviewForm from "./ReviewForm";
import Stars from "./Stars";

export const displayText = "Reviews: ";
export const rating = 0;
const Movie = ({ movie }) => {
// Logs properties first to see if what objects, functions, etc.. are able to be accessed
  console.log("movie properties:", movie);
  const [reviews, setReviews] = useState(movie.reviews || []);
  movie.rating = rating;

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
