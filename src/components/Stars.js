import React, { useState } from "react";
import "../index"; // import the CSS file

function Stars(props) {
  const [rating, setRating] = useState(0);

  const handleClick = (event) => {
    const value = parseInt(event.target.value);
    setRating(value);
  };

  return (
    <div className="star-rating">
      <input type="radio" id="star-1" name="rating" value="1" checked={rating >= 1} onChange={handleClick} />
      <label className="star" htmlFor="star-1"></label>
      <input type="radio" id="star-2" name="rating" value="2" checked={rating >= 2} onChange={handleClick} />
      <label className="star" htmlFor="star-2"></label>
      <input type="radio" id="star-3" name="rating" value="3" checked={rating >= 3} onChange={handleClick} />
      <label className="star" htmlFor="star-3"></label>
      <input type="radio" id="star-4" name="rating" value="4" checked={rating >= 4} onChange={handleClick} />
      <label className="star" htmlFor="star-4"></label>
      <input type="radio" id="star-5" name="rating" value="5" checked={rating >= 5} onChange={handleClick} />
      <label className="star" htmlFor="star-5"></label>
    </div>
  );
}

export default Stars;
