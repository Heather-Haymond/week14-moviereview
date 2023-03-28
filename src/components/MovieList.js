import React from 'react';
import Movie from './Movie';

const MovieList = props => {
  console.log(props)
  // alert(props.movies[0].title);
  return (
    <div>
      {/* us the map function to process each movie seperatly */}
      {props.movies.map((movie) => (
        <Movie key={movie.id} movie={movie} /> 
     ))}
    </div>
  );
};

export default MovieList;

