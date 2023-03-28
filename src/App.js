import "./index";

import MovieList from "./components/MovieList";

export default function App() {
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
      
  return (
    <div className="App">
      
      <h2> magic happens!</h2>
      <MovieList movies={movies} />
    </div>
  );
}