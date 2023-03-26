import React from 'react';
import MovieList from './components/MovieList'; // Import the MovieList component
import ReactDOM from 'react-dom';
//import Apps from './Apps'; // Add components/ to the import path
import './index.css';
//ReactDOM.render(<Apps />, document.getElementById('root'));


// Define an array of movie objects with id, title, synopsis, rating, and reviews properties
const movies = [
  {
    id: 1,
    title: 'Movie number 1',
    synopsis:
      'something.',
    rating: 5,
    reviews: [
      {
        id: 1,
        text: 'Great',
      },
      {
        id: 2,
        text: 'yes!.',
      },
    ],
  },
  {
    id: 2,
    title: 'Movie number 2',
    synopsis:
      'something else.',
    rating: 4,
    reviews: [
      {
        id: 3,
        text: 'Not Good.',
      },
      {
        id: 4,
        text: 'Boo.',
      },
    ],
  },
];

// Define App component as a function that renders a MovieList component with the movies array as a prop
const App = () => {
    //console.log('inside app');
    //alert('please work')
  return (
    <div className='Movies'>
    
      <MovieList movies={movies} />
    </div>
  );
};

export default App; // Export the App component