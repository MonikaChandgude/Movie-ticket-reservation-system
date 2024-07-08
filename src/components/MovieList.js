import React from 'react';
import MovieCard from './MovieCard';
import Animal from "../assets/Animal.jpeg"
import Apurva from "../assets/Apurva.jpeg"
import Bramastra from "../assets/Bramastra.jpeg"
import Darbar from "../assets/Darbar.jpeg"
import Khan from "../assets/Khan.jpeg"
import Seven from "../assets/Seven.jpeg"



const movies = [
  {
    id: 1,
    title: 'Movie 1',
    genre: 'Action',
    rating: '4.5',
    image: Animal,
  },
  {
    id: 2,
    title: 'Movie 2',
    genre: 'Comedy',
    rating: '4.0',
    image: Apurva,
  },
  {
    id: 3,
    title: 'Movie 3',
    genre: 'Drama',
    rating: '4.8',
    image: Bramastra,
  },
  {
    id: 4,
    title: 'Movie 3',
    genre: 'Drama',
    rating: '4.8',
    image: Darbar,
  },
  {
    id: 5,
    title: 'Movie 3',
    genre: 'Drama',
    rating: '4.8',
    image: Khan,
  },
  {
    id: 6,
    title: 'Movie 3',
    genre: 'Drama',
    rating: '4.8',
    image: Seven,
  },
  {
    id: 7,
    title: 'Movie 3',
    genre: 'Drama',
    rating: '4.8',
    image: Seven,
  },
  {
    id: 8,
    title: 'Movie 3',
    genre: 'Drama',
    rating: '4.8',
    image: Seven,
  },
  // Add more movie objects here
];

const MovieList = () => {
  return (
    <div className="container mx-auto px-4 py-8">
    
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
