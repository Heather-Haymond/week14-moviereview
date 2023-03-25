import React from 'react';
import Movie from './Movie';

const MovieList = ({ movies }) => {
  return (
    <div>
      <h2>
        {movies}
      </h2>
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;

