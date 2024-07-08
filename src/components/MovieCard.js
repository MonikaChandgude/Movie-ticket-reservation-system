import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="max-w-60 rounded overflow-hidden shadow-lg bg-white grid justify-items-center py-3 px-2 transform transition duration-300 hover:scale-105 hover:shadow-xl">
        
        <div className="h-40">
           <img className="w-full h-full"  src={movie.image} alt={movie.title} />
        </div>
    
      <div className=" py-2">
        <div className="font-bold text-xl mb-2">{movie.title}</div>
        {/* <p className="text-gray-700 text-base">
          Genre: {movie.genre}
        </p>
        <p className="text-gray-700 text-base">
          Rating: {movie.rating}
        </p> */}
      </div>
      <div className="px-1 pt-1 pb-1">
        <button className="bg-blue-500 hover:bg-blue-700 text-white  py-1 px-2 rounded mr-2">
          View Details
        </button>
        <button className="bg-green-500 hover:bg-green-700 text-white  py-1 px-2 rounded">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
