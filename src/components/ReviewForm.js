import React, { useState } from 'react';

// Define ReviewForm component as a function that takes onReviewSubmit prop
const ReviewForm = ({ onReviewSubmit }) => {
  // Use useState hook to declare reviewText state variable and setReviewText function
  const [reviewText, setReviewText] = useState('');

  // Define handleSubmit function to be called when form is submitted
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    onReviewSubmit(reviewText); // Call the onReviewSubmit prop function with the review text
    setReviewText(''); // Reset the review text state
  };

  // Render a form with a textarea and submit button
  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={reviewText}
        onChange={(event) => setReviewText(event.target.value)} // Update the review text state as the user types
        placeholder="Write your review here..."
        required // Make the textarea a required field
      />
      <button type="submit">Submit</button>
    </form>
  );
};

// Export the ReviewForm component
export default ReviewForm;

